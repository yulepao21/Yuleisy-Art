const boton = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

boton.addEventListener("click", () => {
    menu.classList.toggle("active");
});