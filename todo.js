window.addEventListener("load", () => {
  const form = document.querySelector("#addForm");
  const input = document.querySelector("#input-add");
  const ul = document.querySelector("#task");
  //   console.log(form);

  function createLi() {
    const li = document.createElement("li");
    const label = document.createElement("label");
    label.textContent = "";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const editIcon = document.createElement("fa-pencil");
    editIcon.textContent = "edit";
    const removeIcon = document.createElement("fa-trash-can");
    removeIcon.textContent = "remove";

    li.appendChild(label);
    label.appendChild(checkbox);
    li.appendChild(editIcon);
    li.appendChild(removeIcon);
    return li;
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const li = createLi();
    if (input.value === "") {
      alert("Enter item");
      
    } else {
      ul.appendChild(li)
      
    }
  });
// 
  ul.addEventListener("change",(e)=>{
    const checkbox = e.target;
    const checked = checkbox.checked;
    const li = checkbox.parentNode.parentNode;
    if (checked) {
      li.className ="selected"
    } else {
      li.className = ""
    }
  })

  ul.addEventListener("click",(e)=>{
       if (e.target.tagName === "i") {
        const i  = e.target;
        const li = i.parentNode;
        const ul = li.parentNode;
        if(i.textContent === "remove")
        ul.removeChild()
      
        
       }
  })
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
