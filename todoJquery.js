


//  $(".blink-warning").fadeOut(1000,function(){
//     $(this).fadeIn(1000);
//     blinkWarning();
// })



$(document).ready(function(){

   
    const inputVal = $(".custom-add").val();
       
    $(".addTask").on("submit",function(e){
        e.preventDefault();
       
        if(inputVal.val()!=""){
         $("<li>" + inputVal.val() +"</li>") .appendTo(".list-li")  
        }
        // $(".list-li").append("<li>" +inputVal+"</li>")

    })
})