// const myNodelist = document.getElementsByTagName("LI")

// for(let i=0; i<myNodelist.length;i++){
//   const span =document.createElement("SPAN");
//   const txt = document.createTextNode("\u00D7")
  
// }

window.onload=()=>{
  const form1 = document.querySelector("#addForm")
let items = document.getElementById("items");
let add = document.getElementById("btn-add");
let editItem = null;
form1.addEventListener("add",addItem);
items.addEventListener("click",removeItem);

}

function addItem(e){
  e.preventDefault();
  if(add.value!= "Add"){
  console.log("Please submit");
  editItem.target.parentNode.childNodes[0].data= document.getElementById("input-add").value;
  add.value = "Add";
  document.getElementById("item").value = "";
  // document.getElementById().innerHTML = "Edit successful"
  // document.getElementById().style.display="block";
   // setTimeout(()=>{
  //   document.getElementById("").style.display="none"
  // },3000)
  return false;
  }
 
 

  let newItem = document.getElementById("item").value;
  if(newItem.trim()== "" || newItem.trim()== null) 
  return false;
  else 
  document.getElementById("item").value= "";
  let li = document.createElement("li");
  li.className = "list-group-item";
  let deleteButton = document.createElement("button");

  deleteButton.className =  "delete-icon"
  deleteButton.appendChild(document.createTextNode("Delete"));
  let editButton = document.createElement("button");
  editButton.className= "edit-icon"

  editButton.appendChild(document.createTextNode("Edit"));
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(deleteButton);
  li.appendChild(editButton)
  items.appendChild(li);


}

function removeItem(e){
e.preventDefault()




}









// #######################################

// Function called while clicking add button
function add_item() {

  // Getting box and ul by selecting id;
  let item = document.getElementById("box");
  let list_item = document.getElementById("list_item");
  if(item.value != ""){
  
    // Creating element and adding value to it
    let make_li = document.createElement("LI");
    make_li.appendChild(document.createTextNode(item.value));
  
    // Adding li to ul
    list_item.appendChild(make_li);
  
    // Reset the value of box
    item.value=""
    
    // Delete a li item on click
    make_li.onclick = function(){
      this.parentNode.removeChild(this);
    }
  
  }
  else{
  
    // Alert msg when value of box is "" empty.
    alert("plz add a value to item");
  }
  
  }
  

window.onload = () => {
	const form1 = document.querySelector("#addForm");

	let items = document.getElementById("items");
	let submit = document.getElementById("submit");

	let editItem = null;

	form1.addEventListener("submit", addItem);
	items.addEventListener("click", removeItem);
};

function addItem(e) {
	e.preventDefault();

	if (submit.value != "Submit") {
		console.log("Hello");

		editItem.target.parentNode.childNodes[0].data
			= document.getElementById("item").value;

		submit.value = "Submit";
		document.getElementById("item").value = "";

		document.getElementById("lblsuccess").innerHTML
			= "Text edited successfully";

		document.getElementById("lblsuccess")
						.style.display = "block";

		setTimeout(function() {
			document.getElementById("lblsuccess")
							.style.display = "none";
		}, 3000);

		return false;
	}

	let newItem = document.getElementById("item").value;
	if (newItem.trim() == "" || newItem.trim() == null)
		return false;
	else
		document.getElementById("item").value = "";

	let li = document.createElement("li");
	li.className = "list-group-item";

	let deleteButton = document.createElement("button");

	deleteButton.className =
		"btn-danger btn btn-sm float-right delete";

	deleteButton.appendChild(document.createTextNode("Delete"));

	let editButton = document.createElement("button");

	editButton.className =
			"btn-success btn btn-sm float-right edit";

	editButton.appendChild(document.createTextNode("Edit"));

	li.appendChild(document.createTextNode(newItem));
	li.appendChild(deleteButton);
	li.appendChild(editButton);

	items.appendChild(li);
}

function removeItem(e) {
	e.preventDefault();
	if (e.target.classList.contains("delete")) {
		if (confirm("Are you Sure?")) {
			let li = e.target.parentNode;
			items.removeChild(li);
			document.getElementById("lblsuccess").innerHTML
				= "Text deleted successfully";

			document.getElementById("lblsuccess")
						.style.display = "block";

			setTimeout(function() {
				document.getElementById("lblsuccess")
						.style.display = "none";
			}, 3000);
		}
	}
	if (e.target.classList.contains("edit")) {
		document.getElementById("item").value =
			e.target.parentNode.childNodes[0].data;
		submit.value = "EDIT";
		editItem = e;
	}
}

function toggleButton(ref, btnID) {
	document.getElementById(btnID).disabled = false;
}



