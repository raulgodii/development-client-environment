
$(document).ready(function(){
    $("#pass").on("input", function(){
        console.log($(this).val())
        if($(this).val().length < 5){
            $("p").text("Contraseña no segura");
            $("p").css("color", "red");
        } else if($(this).val().length >= 5 && $(this).val().length <= 8){
            $("p").text("Contraseña medianamente segura");
            $("p").css("color", "orange");
        } else{
            $("p").text("Contraseña segura");
            $("p").css("color", "green");
        }
    });
    
});
