//jamie metcalfe
window.onload = function() {
  const list = document.getElementById("list");
  const input = document.getElementById("item");
  const button = document.getElementById("button");

  // load the shopping list from localStorage if it exists
  const savedList = JSON.parse(localStorage.getItem("shoppingList")) || [];

  // function to add a new item and save to localStorage
  function addItem() {
    const newItem = input.value.trim();

    if (!newItem) {
      console.warn("No item entered.");
      return;
    }

    input.value = '';

    const listItem = document.createElement("li");
    const itemSpan = document.createElement("span");
    itemSpan.classList.add("list-item");
    const deleteButton = document.createElement("button");

    itemSpan.textContent = newItem;
    deleteButton.textContent = "Delete";

    listItem.appendChild(itemSpan);
    listItem.appendChild(deleteButton);

    list.appendChild(listItem);

    deleteButton.addEventListener("click", function () {
      listItem.remove();
      saveList();
    });

    saveList();
    input.focus();
  }

  // function to save the current list to localStorage
  function saveList() {
    const items = Array.from(list.children).map(item => item.firstChild.textContent);
    localStorage.setItem("shoppingList", JSON.stringify(items));
  }

  // function to load the  list into the web app
  function loadList() {
    for (const item of savedList) {
      const listItem = document.createElement("li");
      const itemSpan = document.createElement("span");
      itemSpan.classList.add("list-item");
      const deleteButton = document.createElement("button");

      itemSpan.textContent = item;
      deleteButton.textContent = "Delete";

      listItem.appendChild(itemSpan);
      listItem.appendChild(deleteButton);

      list.appendChild(listItem);

      deleteButton.addEventListener("click", function () {
        listItem.remove();
        saveList();
      });
    }
  }

  // load the saved list into the web app on startup/refesh
  loadList();

  // add event listener to the button to trigger addItem function 
  if (button) {
    button.addEventListener("click", addItem);
  } else {
    console.warn("Add button not found.");
  }
}
