n1 = parseInt(prompt("Introduce un numero"));
n2 = parseInt(prompt("Introduce otro numero"));
op = prompt("Intoduce una operacion");


switch(op){
    case "+":
        alert("El resultado es: " + (n1+n2));
        break;
    case "-":
        alert("El resultado es: " + (n1-n2));
        break;
    case "*":
        alert("El resultado es: " + (n1*n2));
        break;
    case "/":
        alert("El resultado es: " + (n1/n2));
        break;
    default:
        alert("\"" + op + "\"" + " no es una operacion valida");
}