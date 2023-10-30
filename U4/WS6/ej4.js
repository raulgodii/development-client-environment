/*
Crea 3 funciones genéricas para el manejo de cookies:
    a) CrearCookie(identificador,valor,fechaExpiracion): Crea la cookie con sólo un par identificador=valor.
    b) LeerCookie(identificador): Devuelve el valor dentro de la cookie para el identificador indicado si existe o null en caso contrario.
    c) BorrarCookie().
*/

function setCookie(id,val,hExpires){
    let date = new Date();
    date.setTime(date.getTime() + (hExpires * 60 * 60 * 1000)); // Transform date in hours to miliseconds
    let expires = "expires=" + date.toUTCString();
    document.cookie = id+"="+val+";"+expires;
}

function readCookie(id){
    let arrayCookie = document.cookie.split(";");

    for (let cookie of arrayCookie) {
        let splitCookie = cookie.trim().split("=");
        if (splitCookie[0] === id) {
            return splitCookie[1];
        }
    }

    return null;
}

function deleteCookie(id){

}