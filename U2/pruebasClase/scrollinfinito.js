window.addEventListener("scroll", scrollInfinito);

function scrollInfinito(){
    let scrollHeight = document.documentElement.scrollHeight; //
    let scrollTop = document.documentElement.scrollTop; // Distancia hasta arriba
    let clientHeight = document.documentElement.clientHeight;

    if((scrollTop + clientHeight) > (scrollHeight-1000))

    document.getElementById("etiqueta").innerHTML += "<br><br><br><br><br><br><br>scroll";
}