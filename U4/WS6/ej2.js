window.onload = () => {
    checkCookie("colorBg", readCookie("colorBg"));
    checkCookie("colorP", readCookie("colorP"));
    checkCookie("fontSize", readCookie("fontSize"));

    colorBg = document.getElementById("colorBg");
    colorP = document.getElementById("colorP");
    fontSize = document.getElementById("fontSize");
    errorFontSize = document.getElementById("errorFontSize");
    btn = document.getElementById("btn");
    res = document.getElementById("res");
    
    btn.addEventListener("click", (e) => {
        if(!checkValues()){
            e.preventDefault();
        }else{
            setCookie("colorBg", colorBg.value, 5);
            setCookie("colorP", colorP.value, 5);
            setCookie("fontSize", fontSize.value, 5);

            res.style.backgroundColor = colorBg.value;
        res.style.color = colorP.value;
        res.style.fontSize = fontSize.value + "px";
        }
    });

    deleteCookies = document.getElementById("deleteCookies");
    deleteCookies.addEventListener("click", () => {
        deleteCookie("colorBg");
        deleteCookie("colorP");
        deleteCookie("fontSize");
    });


    // h1 = document.getElementById("h1");
    // h1.innerHTML = "¡Bienvenido " + readCookie("usuario") +"!";

    // btn = document.getElementById("btn");
    // btn.addEventListener("click", () => {
    //     deleteCookie("usuario");
    // });
}

function checkCookie(id, value){
    if(value != null){
        document.getElementById(id).disabled = true;
        res.style.backgroundColor = readCookie("colorBg");
        res.style.color = readCookie("colorP");
        res.style.fontSize = readCookie("fontSize") + "px";
    }
}

function checkFontSize(cad){
    let regex = /^[0-9]+$/;
    let res = regex.test(cad);
    if(!res){
        errorFontSize.innerHTML = "ERROR: ¡Introduce un tamaño valido!"
    }else{
        errorFontSize.innerHTML= "";
    }
    return res;
}

function checkValues(){
    checkFontSize(fontSize.value);

    return checkFontSize(fontSize.value);
}