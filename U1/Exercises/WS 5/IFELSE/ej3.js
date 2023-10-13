var edad = prompt("Introduce tu edad");

edad = parseInt(edad);

if(edad < 5){
    alert("Jardin de Infancia");
}

if(edad > 5 && edad < 12){
    alert("Primaria");
}

if(edad > 12 && edad < 17){
    alert("ESO");
}

if(edad > 17 && edad < 22){
    alert("Bachiller o ciclos");
}

if(edad > 21){
    alert("Universidad");
}