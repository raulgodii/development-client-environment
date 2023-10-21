window.onload = function(){
    x = document.getElementById("x");
    y = document.getElementById("y");

    document.body.addEventListener("mousemove", (e) =>{
        x.innerHTML = e.clientX + "x";
        y.innerHTML = e.clientY + "y";
    }); 
}