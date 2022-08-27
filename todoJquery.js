


//  $(".blink-warning").fadeOut(1000,function(){
//     $(this).fadeIn(1000);
//     blinkWarning();
// })

 
    // const inputVal = $(".custom-add").val();
       
    // $(".addTask").on("submit",function(e){
    //     e.preventDefault();
       
    //     if(inputVal.val()!=""){
    //      $("<li>" + inputVal.val() +"</li>") .appendTo(".list-li")  
    //     }
    //     // $(".list-li").append("<li>" +inputVal+"</li>")

    // })

$(document).ready(function(){
$("#input-add").change(function(){
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