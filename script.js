// Get references to the list, input, and button elements
window.onload = function() {
  const list = document.getElementById("list");
  const input = document.getElementById("item");
  const button = document.getElementById("button");

  // Function to add a new item to the list
  function addItem() {
  // Get the value of the input element and store it in a variable
  const newItem = input.value;

    if (!newItem) {
      console.warn("No item entered.");
      return;
    }

  // Clear the input element
    input.value = '';

  // Create a new list item, span, and button element
    const listItem = document.createElement("li");
    const itemSpan = document.createElement("span");
      itemSpan.classList.add("list-item");
    const deleteButton = document.createElement("button");

  // Set the text content of the span and button elements
    itemSpan.textContent = newItem;
    deleteButton.textContent = "Delete";

  // Append the span and button elements to the list item
    listItem.appendChild(itemSpan);
    listItem.appendChild(deleteButton);

  // Append the list item to the list
    list.appendChild(listItem);

  // Add event listener to the delete button to remove its parent li element
    deleteButton.addEventListener("click", function () {
      listItem.remove();
    });

  // Focus on the input element
    input.focus();
  }

// Add event listener to the button to trigger addItem function when clicked
  if (button) {
    button.addEventListener("click", addItem);
  } else {
    console.warn("Add button not found.");
  }
}