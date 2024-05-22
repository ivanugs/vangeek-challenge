const url = "https://fake-api-three-chi.vercel.app/product";

async function getProducts() {
    const products = await fetch(url);
    return await products.json();
};

async function sendProducts(img, name, price){
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                img: img,
                name: name,
                price: price,
            })
        });
    
        if (!response.ok) {
            throw new Error('La solicitud no fue exitosa. Código de estado: ' + response.status);
        }

        return await response.json();
    } catch (error) {
        console.error("Ha ocurrido un error al crear el producto:", error);        
    }
};

async function deleteProduct(id){
    try {
        const response = await fetch(`${url}/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error('La solicitud no fue exitosa. Código de estado: ' + response.status);
        }
        
        return await response.json();
    } catch (error) {
        console.error("Ha ocurrido un error al eliminar el producto:", error);
    }
}


export const conexionAPI={
    getProducts, 
    sendProducts, 
    deleteProduct
};