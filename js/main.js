import { conexionAPI } from "./conexionAPI.js";

const list = document.querySelector("[data-list]");
const formulario = document.querySelector("[data-formulario]");
const cleanButtton = document.querySelector(".formulario__boton-limpiar");

export default function createCard(img, name, price) {
    const product = document.createElement("div");
    product.className = "card";
    product.innerHTML = `
        <img class="card-container--image" src="${img}" />
        <div class="card-container--info">
        <p>${name}</p>
        <div class="card-container--value">
            <p>$ ${price}.00</p>
            <img src="./assets/images/trash_icon.png" />
        </div>
        </div>
    `;
    return product;
};

async function listProducts() {
    try {
        const listAPI = await conexionAPI.getProducts();
        listAPI.forEach(product => list.appendChild(createCard(product.img, product.name, product.price)));
    } catch (error) {
        list.innerHTML = `<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexion.</h2>`;
        console.log(error);
    }
};

cleanButtton.addEventListener("click", () => {
    formulario.reset();
});

listProducts();