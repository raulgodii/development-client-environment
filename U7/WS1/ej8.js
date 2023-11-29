$(document).ready(function(){
    $("#m1 h2").css("font-size", "40px");
    $("#m2 h2").css("font-size", "30px");
    $("#m3 h2").css("font-size", "20px");

    $(".movie h2").click(function(){
        $("+p", this).toggle(300);
    });

    $(".movie p").hover(function(){
        $(this).css("color", "red");
    }, 
    function(){
        $(this).css("color", "black");
    });
});