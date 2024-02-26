const bodyElement = document.querySelector("body");

const containerElement = document.createElement("div");
containerElement.setAttribute("class", "container");
bodyElement.appendChild(containerElement);

const headerElement = document.createElement("h1");
headerElement.classList.add("header");
headerElement.textContent = "My Shopping List";
containerElement.appendChild(headerElement);

const inputSectionElement = document.createElement("div");
inputSectionElement.classList.add("inputSection");
containerElement.appendChild(inputSectionElement);

const labelElement = document.createElement("label");
labelElement.setAttribute("id", "label");
labelElement.textContent = "Enter a new item: ";
inputSectionElement.appendChild(labelElement);

const userInputElement = document.createElement("input");
userInputElement.setAttribute("type", "text");
userInputElement.setAttribute("placeholder", "New item...");
userInputElement.setAttribute("id", "input");
inputSectionElement.appendChild(userInputElement);

const submitBtnElement = document.createElement("button");
submitBtnElement.setAttribute("id", "submitBtn");
submitBtnElement.textContent = "Add item";
inputSectionElement.appendChild(submitBtnElement);

const listSectionElement = document.createElement("div");
listSectionElement.classList.add("listSection");
containerElement.appendChild(listSectionElement);

const itemsListElement = document.createElement("ul");
itemsListElement.setAttribute("id", "itemsList");
listSectionElement.appendChild(itemsListElement);

submitBtnElement.disabled = true;
userInputElement.focus();

userInputElement.addEventListener("input", (e) => {
    submitBtnElement.disabled = e.target.value.length === 0;
});

const addItemToList = () => {
    if (userInputElement.value.length > 0) {
        const newItem = userInputElement.value;

        const newItemElement = document.createElement("li");
        newItemElement.textContent = newItem;

        const deleteBtnElement = document.createElement("button");
        deleteBtnElement.textContent = "Delete";
        deleteBtnElement.classList.add("deleteBtn");

        newItemElement.appendChild(deleteBtnElement);

        itemsListElement.appendChild(newItemElement);

        deleteBtnElement.addEventListener("click", () => {
            itemsListElement.removeChild(newItemElement);
        });

        userInputElement.value = "";
        submitBtnElement.disabled = userInputElement.value.length === 0;
        userInputElement.focus();
    }
};

submitBtnElement.addEventListener("click", addItemToList);
