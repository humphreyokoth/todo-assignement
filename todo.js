function addItem() {
  const a = document.getElementById("list");
  const items = document.getElementById("items");
  const li = document.createElement("li");
  li.setAttribute("id", items.value);
  li.appendChild(document.createTextNode(items.value));
  a.appendChild(li);
}

// Creating a function to remove item from list
function removeItem() {
  // Declaring a constiable to get select element
  const a = document.getElementById("list");
  const items = document.getElementById("items");
  const item = document.getElementById(items.value);
  a.removeChild(item);
}
