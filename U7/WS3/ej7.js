$(document).ready(function(){
    $("#btn1").click(function() {
        animation(true);
    });

    $("#btn2").click(function() {
        animation(false);
    });

});

function animation(display) {
    if(display) {
        $("div").animate({left: "+=50px", width: "300px"}, 1000);
        $("div").animate({top: "+=50px", width: "200px"}, 1000);
        $("div").animate({left: "-=50px", width: "150px"}, 1000);
        $("div").animate({top: "-=50px",width: "100px"}, 1000);
    } else {
        $("div").stop(true, false);
    }
}