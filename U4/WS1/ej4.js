
window.onload = function(){

    var tdList = document.querySelectorAll("td");
    var btn = document.getElementById("btn");

    tdList.forEach(function(td) {
        td.addEventListener("mousemove", function(e) {
            if(e.ctrlKey){
                e.target.style.backgroundColor = "red";
            }
            if(e.shiftKey){
                e.target.style.backgroundColor = "blue";
            }
            if(e.altKey){
                e.target.style.backgroundColor = "white";
            }
        });
    });

    btn.addEventListener("click", () =>{
        tdList.forEach(function(td) {
            td.style.backgroundColor = "white";
        });
    });
}