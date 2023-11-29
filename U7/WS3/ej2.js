$(document).ready(function(){
    $("table td").each(function() {
        if ($(this).text() === "") {
            $(this).css("background-color", "yellow");
        }
    });
});