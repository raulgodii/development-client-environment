n = parseInt(prompt("Introduce el numero a adivinar"));

do{
    a = parseInt(prompt("Introduce un numero"));
    if(a<n){
        alert("El numero que has introducido es menor");
    }
    else if(a>n){
        alert("El numero que has introducido es mayor");
    }
}while(a!=n);

alert("¡Enhorabuena, acertaste!");