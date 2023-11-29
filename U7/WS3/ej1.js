$(document).ready(function(){
    $("body").append("<table></table>");

    for(i=0; i<8; i++){
        $("table").append("<tr><td></td></tr>");
    }

    $("table tr").hover(function(){
        $(this).css("background-color", "white");
    }, function(){
        $(this).css("background-color", "black");
    });

    $("table tr:nth-child(-n+2)").css("background-color", "red");

    $("table tr:nth-child(n+3)").css("background-color", "blue");
});