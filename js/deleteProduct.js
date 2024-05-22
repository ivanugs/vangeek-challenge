import { conexionAPI } from "./conexionAPI.js";

const productContainer = document.querySelector(".productos__container");

productContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("card__trash-icon")) {
        const card = event.target.closest('.card');
        const id = card.dataset.id;
        const question = confirm("¿Estás seguro de eliminar el producto?");

        if (question) {
            try {
                conexionAPI.deleteProducts(id);
            } catch (error) {
                console.error(error);
            }
        }
    }
});
