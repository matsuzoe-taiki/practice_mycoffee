const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

const toggleMenu = () => {
    menuButton.classList.toggle("is-active");
    menu.classList.toggle("is-active");
};

menuButton.addEventListener("click", toggleMenu);