/* import { conexionAPI } from "./conexionAPI.js";

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

formulario.addEventListener("submit", evento => {
    createProduct(evento);
    formulario.reset()
}); */

import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function createProduct(evento) {
    evento.preventDefault();

    const imgInput = document.querySelector("[data-img]");
    const nameInput = document.querySelector("[data-name]");
    const priceInput = document.querySelector("[data-price]");

    const img = imgInput.value;
    const name = nameInput.value;
    const price = priceInput.value;

    try {
        const response = await conexionAPI.sendProducts(img, name, price);
    
        // Verificar si la respuesta indica un error HTTP
        if (!response.ok) {
            // Si la respuesta indica un error HTTP, lanzar un nuevo error con el mensaje del servidor
            const errorMessage = await response.text();
            throw new Error(errorMessage);
        }
    
        // Si no hay error HTTP, mostrar mensaje de éxito y restablecer el formulario
        alert("Producto creado exitosamente.");
        formulario.reset();
    } catch (error) {
        // Si ocurre un error durante la solicitud o la respuesta no es un error HTTP, manejarlo aquí
        alert("Ha ocurrido un error al crear el producto. Intente nuevamente.");
        console.error(error);
    }
    
}

formulario.addEventListener("submit", async evento => {
    try {
        await createProduct(evento);
    } catch (error) {
        console.error(error);
    }
});
