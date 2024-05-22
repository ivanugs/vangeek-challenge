/* // See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/product/:resource/:id/show': '/:resource/:id'
}))
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server */

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/product/:resource/:id/show': '/:resource/:id'
}))

server.use(router)

server.get('/product', (req, res) => {
  const products = router.db.get('products').value()
  res.status(200).json(products)
})

server.get('/product/:id', (req, res) => {
  const product = router.db.get('products').find({ id: req.params.id }).value()
  if (!product) {
    res.status(404).json({ error: 'Producto no encontrado' })
  } else {
    res.status(200).json(product)
  }
})

server.post('/product', (req, res) => {
  res.status(201).json({ message: 'Producto creado exitosamente' })
})

server.delete('/product/:id', (req, res) => {
  res.status(200).json({ message: 'Producto eliminado exitosamente' })
})

server.listen(3000, () => {
    console.log('JSON Server is running')
})

export default server
