// loadEvents();
// function loadEvents(){
//   document.querySelector('form').addEventListener('submit',submit)
//  // document.querySelector('ul').addEventListener('click',deleteOrCheck)
// }

// function submit(e){
//   e.preventDefault();
//   let taskList;
//   let input = document.querySelector('input');
//   if(input.value!=""){
//     addTask(input.value);
//     input.value = '';
//   }
// }

// // Add Task
// function addTask(task){
//   let ul = document.querySelector('ul');
//   let li = document.createElement('li')
//   li.innerHTML = `<span class="delete"></span><input type="checkbox"><label>${task}</label>`;
//   ul.appendChild(li);
//   document.querySelector('.list').style.display = 'block'
  
// }


window.addEventListener('load', () => {
	const form = document.querySelector("#addForm");
	const input = document.querySelector("#input-add");
	const list = document.querySelector("#task");
console.log(form)
	form.addEventListener('submit', (e) => {
		e.preventDefault();
// console.log("submit form")
		const task = input.value;

		const taskList = document.createElement('div');
		taskList.classList.add('task');
  
		const items = document.createElement('div');
		items.classList.add('list-li');
		items.innerText= task 
		// taskList.appendChild(items); 

		const taskInput = document.createElement("input")
		taskInput.classList.add("text");
		taskInput.type = "text";
		taskInput.value =task;
		//taskInput .setAttribute
		taskList.appendChild(taskInput)

		const taskIcons = document.createElement("li")
		taskIcons.classList.add("list")
		// Edit Icon
		const taskEditIcon = document.createElement("fa-pencil");
		taskEditIcon.classList.add("edit");
		taskEditIcon.innerHTML ="Edit";
		// Delete Icon
		const taskDeleteIcon = document.createElement("fa-trash-can");
		taskDeleteIcon.classList.add("delete");
		taskDeleteIcon.innerHTML = "Delete"

		//  Append Child to Edit and Delete Icon
		taskIcons.appendChild(taskEditIcon);
		taskIcons.appendChild(taskDeleteIcon);


		taskList.appendChild(taskIcons);
		items.appendChild(taskList);

		input.value= "";

		taskEditIcon.addEventListener("click",()=>{
			if (taskEditIcon.innerText == "edit" ) {
				taskInput.removeAttribute("readonly");
			taskInput.focus();
			taskEditIcon.innerHTML="Save"
				
			}else{
				taskInput.setAttribute("readonly","readonly");
				task.taskEditIcon.innerText ="taskEditIcon"
				console.log("Save");
			}
		})

		taskDeleteIcon.addEventListener("click",()=>{
			items.removeChild(items);
		})

	// 	const list = document.createElement('list');
	// 	list.classList.add("items");
	// 	list.type = 'text';
	// 	list.value = task;
	// 	list.setAttribute('readonly', 'readonly');

	// 	items.appendChild(list);

	// 	const task_actions_el = document.createElement('ul');
	// 	task_actions_el.classList.add('actions');
		
	// 	const taskListit_el = document.createElement('icon-button');
	// 	taskListit_el.classList.add('icon-button');
	// 	taskListit_el.innerText = 'Edit';

	// 	const task_delete_el = document.createElement('fa-trash-can');
	// 	task_delete_el.classList.add('delete');
	// 	task_delete_el.innerText = 'Delete';

	// 	task_actions_el.appendChild(taskListit_el);
	// 	task_actions_el.appendChild(task_delete_el);

	// 	taskList.appendChild(task_actions_el);

	// 	list.appendChild(taskList);

	// 	input.value = '';

	// 	taskListit_el.addEventListener('click', (e) => {
	// 		if (taskListit_el.innerText.toLowerCase() == "edit") {
	// 			taskListit_el.innerText = "Save";
	// 			list.removeAttribute("readonly");
	// 			list.focus();
	// 		} else {
	// 			taskListit_el.innerText = "Edit";
	// 			list.setAttribute("readonly", "readonly");
	// 		}
	// 	});

	// 	task_delete_el.addEventListener('click', (e) => {
	// 		list.removeChild(taskList);
	// 	});
	// });
});


// const form = document.querySelector("#addForm");
// 	//const input = document.querySelector("#input-add");
// const list = document.querySelector("#task");

// const input = document.querySelector(".custom-add");
// const addBtn = document.querySelector(".submit");

// const tasks = document.querySelector(".list");

// // Add Task

// input.addEventListener('keyup', () => {
// 		if (input !== 0) {
// 			addBtn.classList.add("active");

// 		} else {
// 			addBtn.classList.remove("active");
// 		}
// })

// addBtn.addEventListener("click",()=>{
// 	if(input !== 0){
// 		let newItem = document.createElement("div");
// 		newItem.classList.add("list")
// 		newItem.innerHTML = `${input}
// 		< div class="list" id="list">
// 		<i class="fa-solid fa-trash-can"></i> <i class="fa-solid fa-pencil"></i></ul>`
// 		tasks.appendChild(newItem);
// 		input.value = "";
// 	}else{
// 		alert("Please enter a task")
// 	}
 })