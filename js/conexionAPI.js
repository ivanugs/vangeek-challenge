async function getProducts() {
    const products = await fetch("http://localhost:3001/product");
    let parseProducts = await products.json();
    //console.log(parseProducts);
    return parseProducts;
};

async function sendProducts(img, name, price){
    const products = await fetch("http://localhost:3001/product", {
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
        throw new Error("Ha ocurrido un error al subir el producto. Intente nuevamente");
    }
    return parseProducts;
};

export const conexionAPI={
    getProducts, sendProducts
}; 