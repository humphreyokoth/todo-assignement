window.addEventListener("load", () => {
  const form = document.querySelector("#addForm");
  const input = document.querySelector("#input-add");
  const ul = document.querySelector("#task");
  const deleteIcon = document.getElementsByClassName("deleteIcon");
  const editIcon = document.getElementsByClassName("editIcon");
  //   console.log(form);

  function createLi() {
  //  list with input value
    const list =
      '<li> <input type="checkbox" name="checkbox" id="list-1" checked />' +
      '<label class="label-2"> ' +
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
  });
 function editList(e){
  console.log("####### Editing");

  if (editIcon.innerText == "edit") {
          taskInput.removeAttribute();
          taskInput.focus();
          editIcon.innerHTML = "Save";
        } else {
          taskInput.setAttribute();
          task.editIcon.innerText = "editIcon";
          console.log("Save");
        }
 }
 editList();
  // editIcon.addEventListener("click", () => {
  //     if (editIcon.innerText == "edit") {
  //       taskInput.removeAttribute();
  //       taskInput.focus();
  //       editIcon.innerHTML = "Save";
  //     } else {
  //       taskInput.setAttribute();
  //       task.editIcon.innerText = "editIcon";
  //       console.log("Save");
  //     }
  //   });
 
    function deleteList(e){
      console.log("#######");
    if (e === "deleteIcon") {
       const li = deleteIcon.parentNode;
      const ul = li.parentNode;
      if (deleteIcon.textContent === "remove") ul.removeChild();
    }
    
    
  };
  deleteList();

//   taskDeleteIcon.addEventListener("click", () => {
//   items.removeChild(items);
// });




});

// const form = document.querySelector("#addForm");
// const input = document.querySelector("#input-add");
// const ul = document.querySelector("#task");

// function createLi(){
// const li = document.createElement("li")

//}

// console.log("submit form")
// const task = input.value;

// const taskList = document.createElement("div");
// taskList.classList.add("task");

// const items = document.createElement("div");
// items.classList.add("list-li");
// items.innerText = task;
// list.appendChild(items);

// const taskInput = document.createElement("input");
// taskInput.classList.add("text");
// taskInput.type = "text";
// taskInput.value = task;
// //taskInput .setAttribute
// taskList.appendChild(taskInput);

// const taskIcons = document.createElement("li");
// taskIcons.classList.add("list");
// // Edit Icon
// const editIcon = document.createElement("fa-pencil");
// editIcon.classList.add("edit");
// editIcon.innerHTML = "Edit";
// // Delete Icon
// const taskDeleteIcon = document.createElement("button");
// taskDeleteIcon.classList.add("delete");
// taskDeleteIcon.innerHTML = "Delete";

// //  Append Child to Edit and Delete Icon
// taskIcons.appendChild(editIcon);
// taskIcons.appendChild(taskDeleteIcon);

// // Append taskIcons to tasklist
// taskList.appendChild(taskIcons);
// //  Append task list items of the list
// items.appendChild(taskList);

// input.value = "";

// editIcon.addEventListener("click", () => {
//   if (editIcon.innerText == "edit") {
//     taskInput.removeAttribute();
//     taskInput.focus();
//     editIcon.innerHTML = "Save";
//   } else {
//     taskInput.setAttribute();
//     task.editIcon.innerText = "editIcon";
//     console.log("Save");
//   }
// });

// taskDeleteIcon.addEventListener("click", () => {
//   items.removeChild(items);
// });
