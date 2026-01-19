const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

const toggleMenu = () => {
    menuButton.classList.toggle("is-active");
    menu.classList.toggle("is-active");
};

menuButton.addEventListener("click", toggleMenu);

const tabItems = document.querySelectorAll(".tab-item");

tabItems.forEach((tabItem) => {
    tabItem.addEventListener("click", () => {
        tabItems.forEach((t) => {
            t.classList.remove("active");
        });
        const tabPanels = document.querySelectorAll(".tab-panel");
        tabPanels.forEach((tabPanel) => {
            tabPanel.classList.remove("active");
        });
        tabItem.classList.add("active");
        const targetId = tabItem.dataset.target;
        document.getElementById(targetId).classList.add("active");
    })
})
