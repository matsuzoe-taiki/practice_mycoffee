const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const itemList = document.getElementById("itemList");

addButton.addEventListener("click", () => {
    const todoValue = todoInput.value;
    if (todoValue.length !== 0) {
        const newLi = document.createElement("li");
        newLi.textContent = todoValue;
        itemList.appendChild(newLi);
        todoInput.value = "";
    }
})