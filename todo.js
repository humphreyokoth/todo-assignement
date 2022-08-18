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
  }
}
