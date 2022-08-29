window.addEventListener("load", () => {
  const form = document.querySelector("#addForm");
  const input = document.querySelector("#input-add");
  const list = document.querySelector("#task");
//   console.log(form);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log("submit form")
    const task = input.value;

    const taskList = document.createElement("div");
    taskList.classList.add("task");

    const items = document.createElement("div");
    items.classList.add("list-li");
    items.innerText = task;
    // taskList.appendChild(items);

    const taskInput = document.createElement("input");
    taskInput.classList.add("text");
    taskInput.type = "text";
    taskInput.value = task;
    //taskInput .setAttribute
    taskList.appendChild(taskInput);

    const taskIcons = document.createElement("li");
    taskIcons.classList.add("list");
    // Edit Icon
    const taskEditIcon = document.createElement("fa-pencil");
    taskEditIcon.classList.add("edit");
    taskEditIcon.innerHTML = "Edit";
    // Delete Icon
    const taskDeleteIcon = document.createElement("fa-trash-can");
    taskDeleteIcon.classList.add("delete");
    taskDeleteIcon.innerHTML = "Delete";

    //  Append Child to Edit and Delete Icon
    taskIcons.appendChild(taskEditIcon);
    taskIcons.appendChild(taskDeleteIcon);

    // Append taskIcons to tasklist
    taskList.appendChild(taskIcons);
    //  Append task list items of the list
    items.appendChild(taskList);

    input.value = "";

    taskEditIcon.addEventListener("click", () => {
      if (taskEditIcon.innerText == "edit") {
        taskInput.removeAttribute("readonly");
        taskInput.focus();
        taskEditIcon.innerHTML = "Save";
      } else {
        taskInput.setAttribute("readonly", "readonly");
        task.taskEditIcon.innerText = "taskEditIcon";
        console.log("Save");
      }
    });

    taskDeleteIcon.addEventListener("click", () => {
      items.removeChild(items);
    });
  });
});
