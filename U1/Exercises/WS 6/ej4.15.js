n = parseInt(prompt("Introduce el numero a adivinar"));

a = parseInt(prompt("Introduce un numero"));

while(a!=n){   
    if(a<n){
        alert("El numero que has introducido es menor");
    }
    else if(a>n){
        alert("El numero que has introducido es mayor");
    }
};

alert("¡Enhorabuena, acertaste!");