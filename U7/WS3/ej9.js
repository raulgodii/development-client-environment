
$(document).ready(function(){
    $("#start").click(function(){
        $("div").animate({
            left: "0px",
            top: "20px",
            opacity: "0",
            backgroundColor: "blue"
        }, 3000);

        $("div").hide(3000);
    });

    $("#stop").click(function(){
        $("div").stop(true, false);
    });
    
});
