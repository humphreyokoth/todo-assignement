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

  // editIcon.addEventListener("click", () => {
  //     if (taskEditIcon.innerText == "edit") {
  //       taskInput.removeAttribute();
  //       taskInput.focus();
  //       taskEditIcon.innerHTML = "Save";
  //     } else {
  //       taskInput.setAttribute();
  //       task.taskEditIcon.innerText = "taskEditIcon";
  //       console.log("Save");
  //     }
  //   });
 
    function deleteList(e){
      console.log("#######");
    if (e.target.tagName === "deleteIcon") {
      const deleteIcon = e.target;
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
// const taskEditIcon = document.createElement("fa-pencil");
// taskEditIcon.classList.add("edit");
// taskEditIcon.innerHTML = "Edit";
// // Delete Icon
// const taskDeleteIcon = document.createElement("button");
// taskDeleteIcon.classList.add("delete");
// taskDeleteIcon.innerHTML = "Delete";

// //  Append Child to Edit and Delete Icon
// taskIcons.appendChild(taskEditIcon);
// taskIcons.appendChild(taskDeleteIcon);

// // Append taskIcons to tasklist
// taskList.appendChild(taskIcons);
// //  Append task list items of the list
// items.appendChild(taskList);

// input.value = "";

// taskEditIcon.addEventListener("click", () => {
//   if (taskEditIcon.innerText == "edit") {
//     taskInput.removeAttribute();
//     taskInput.focus();
//     taskEditIcon.innerHTML = "Save";
//   } else {
//     taskInput.setAttribute();
//     task.taskEditIcon.innerText = "taskEditIcon";
//     console.log("Save");
//   }
// });

// taskDeleteIcon.addEventListener("click", () => {
//   items.removeChild(items);
// });
