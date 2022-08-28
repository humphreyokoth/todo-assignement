

$(document).ready(function(){
$(".submit").change(function(){
    const input = $(this).val();
    $("ul").append('<li>'+ input +  '<input type="checkbox" name="checkbox" id="list-1" /> <i class= "fa-solid fa-trash-can"> </i> <i class="fa-solid fa-pencil"></i> </li>');
    $(this).val("");
})
$("ul").on("click",".fa-pencil",function(){
    $(this).parent("li").inlineEdit()
})
  $("ul").on("click",".fa-trash-can",function(){
   $(this).parent("li").remove();
  })
})