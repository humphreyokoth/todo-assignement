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
	const list_el = document.querySelector("#list");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_el = document.createElement('ul');
		task_el.classList.add('list');

		const task_content_el = document.createElement('li');
		task_content_el.classList.add('list');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('ul');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('icon-button');
		task_edit_el.classList.add('icon-button');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});