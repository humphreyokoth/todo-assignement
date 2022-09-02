

$(document).ready(function(){
  // Submit list item.
$(".submit").click(function(e){
  e.preventDefault();
    const input = $(this).val();
    $("ul").append('<li>'+ input +  '<input type="checkbox" name="checkbox" id="list-1" /> <i class= "fa-solid fa-trash-can"> </i> <i class="fa-solid fa-pencil"></i> </li>');
    $(this).val(input);
})
// Editing input with list item .
$("ul").on("click",".fa-pencil",function(){
    $(this).parent("li").find("label").attr("contenteditable","true");
})
// Deleting Input Item.
  $("ul").on("click",".fa-trash-can",function(){
   $(this).parent("li").remove();
  })
})

