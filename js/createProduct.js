import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function createProduct(evento) {
    evento.preventDefault();

    const img = document.querySelector("[data-img]").value;
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;

    try {
        await conexionAPI.sendProducts(img, name, price);
    } catch (error) {
        alert(error);
    }
}

formulario.addEventListener("submit", evento => createProduct(evento));