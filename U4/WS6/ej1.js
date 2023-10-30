window.onload = () => {
    usuario = readCookie("usuario");

    if(usuario == null){
        nombre = prompt("Introduce el nombre de usuario");
        setCookie("usuario", nombre, 5);
    }

    h1 = document.getElementById("h1");
    h1.innerHTML = "¡Bienvenido " + readCookie("usuario") +"!";

    btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
        deleteCookie("usuario");
    });
}