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
        var parentofSelected = this.parentNode;
        //console.log("Reached");
        var children = parentofSelected.childNodes;
        //console.log(parentofSelected);
        for (var i = 0; i < children.length; i++) {
          // console.log(children[i].tagName);
          if (children.classList !== null) {
            //console.log(children.classList);
            if (children[i].tagName == "LABEL") {
              //console.log(children[i]);
              if (children[i].classList.contains("label-2")) {
                children[i].contentEditable = "true";
                children[i].addEventListener("keydown", function (e) {
                  if (e.keyCode === 13) {
                    e.preventDefault();
                    this.contentEditable = "false";
                  }
                });
              }
            }
          }
        }
      },
      false
    );
  }
}
// Function to create a list.
function createLi() {
  //  list with input value
  const list =
    '<li> <input type="checkbox" name="checkbox" id="list-1" />' +
    '<label class="label-2"> ' +
    input.value +
    "</label>" +
    ' <i class="fa-solid fa-trash-can deleteIcon"></i>' +
    '<i class="fa-solid fa-pencil editIcon"></i>' +
    "</li>";

  return list;
}
// Eventlistener on adding of a list item using form
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
