const url = "http://localhost:3001/product";

async function getProducts() {
    const products = await fetch(url);
    let parseProducts = await products.json();
    //console.log(parseProducts);
    return parseProducts;
};

async function sendProducts(img, name, price){
    const products = await fetch(url, {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
            img: img,
            name: name,
            price: price
        })
    });
    const parseProducts = products.json();

    if (!products.ok) {
        throw new Error("Ha ocurrido un error al subir el producto. Intente nuevamente.");
    }
    return parseProducts;
};

async function deleteProducts(id){
    const product = await fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {"Content-type": "application/json"}
    });
    const parseProducts = product.json();
    
    if (!product.ok) {
        throw new Error ("Ha ocurrido un error al eliminar el producto. Intente nuevamente.");
    }

    return parseProducts;
}

export const conexionAPI={
    getProducts, 
    sendProducts, 
    deleteProducts
}; 