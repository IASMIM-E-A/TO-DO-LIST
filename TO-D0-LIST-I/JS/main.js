const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-button"); 
const listContainer = document.getElementById("todo-list");

function addItem() {
  const value = input.value.trim(); 

  if (value === "") return; 

  const itemDiv = document.createElement("div");
  itemDiv.className = "todo-item"; 

  const itemText = document.createElement("span");
  itemText.textContent = value; 
  
  const removeButton = document.createElement("button");
  removeButton.textContent = "REMOVER";
  removeButton.className = "remove-button";

  removeButton.onclick = function () {
    listContainer.removeChild(itemDiv); 
  };

  itemDiv.appendChild(itemText);
  itemDiv.appendChild(removeButton);

  listContainer.appendChild(itemDiv);

  input.value = "";
}

addButton.addEventListener("click", addItem);

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addItem();
  }
});



