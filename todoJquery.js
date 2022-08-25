$(document).ready(function(){
    $(".submit").click(function(){
        const inputVal = $(".custom-add-input").val();
       
        $(".list-li").append("<li>"+inputVal+"</li>")

    })
})