const form = document.querySelector("#addForm");
const input = document.querySelector("#input-add");
const ul = document.querySelector("#task");
const deleteIcon = document.getElementsByClassName("deleteIcon");
const editIcon = document.getElementsByClassName("editIcon");
const editLabel = document.getElementsByClassName("label-text");

//Function to delete list
function deleteList() {
  deletes = deleteIcon.length;
  for (let i = 0; i < deletes; i++) {
    deleteIcon[i].addEventListener(
      "click",
      function () {
        this.parentNode.remove();
      },
      false
    );
  }
}

//Function to edit
function editList() {
  edits = editIcon.length;
  for (let i = 0; i < edits; i++) {
    editIcon[i].addEventListener(
      "click",
      function () {
      
        this.setAttribute("contentEditable", true);

      },
      false
    );
  }
}

function createLi() {
  //  list with input value
  const list =
    '<li> <input type="checkbox" name="checkbox" id="list-1" />' +
    '<label class="label-text"> ' +
    input.value +
    "</label>" +
    ' <i class="fa-solid fa-trash-can deleteIcon"></i>' +
    '<i class="fa-solid fa-pencil editIcon"></i>' +
    "</li>";

  return list;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const li = createLi();
  if (input.value === "") {
    alert("Enter item");
  } else {
    ul.innerHTML += li;
  }

  //Function calls whenever i create a new element to add event listner on each list
  deleteList();
  editList();
});