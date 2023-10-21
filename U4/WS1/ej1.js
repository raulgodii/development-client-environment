window.onload = function() {
    btn = document.getElementById("btn");
    btn.addEventListener('click', () =>{
        color = ["red", "blue", "white", "green", "yellow", "black", "grey", "pink"];
        document.body.style.backgroundColor = color[Math.floor(Math.random()*color.length)];
    });
}