//A
function invierteCadena(cad_arg){
    let r = "";
        for(i=cad_arg.length-1; i>=0; i--){
            r = r + cad_arg[i];
        }
    return r;
}
document.write(`El resultado de pasarle la cadena "hola" a la funcion <u>invierteCadena</u> es: <b>` + invierteCadena("hola") + "</b><br>");


//B
function inviertePalabras(cad_arg){
    let aux = cad_arg.split(" ");
    let r = "";
        for(i=aux.length-1; i>=0; i--){
            r = r + aux[i] + " ";
        }
    return r;
}
document.write(`El resultado de pasarle la cadena "hola que tal" a la funcion <u>inviertePalabras</u> es: <b>` + inviertePalabras("hola que tal") + "</b><br>");


//C
function encuentraPalabraMasLarga(cad_arg){
    let aux = cad_arg.split(" ");
    let r = "";
        for(i=aux.length-1; i>=0; i--){
            if(aux[i].length>r.length){
                r = aux[i];
            }
        }
    return r;
}
document.write(`El resultado de pasarle la cadena "hola que tal estass" a la funcion <u>ecuentraPalabraMasLarga</u> es: <b>` + encuentraPalabraMasLarga("hola que tal estass") + "</b><br>");



//D
function filtraPalabrasMasLargas(cad_arg, i){
    let aux = cad_arg.split(" ");
    let r = "";
        for(j=0; j<aux.length; j++){
            if(aux[j].length>i){
                r = r + aux[j] + " ";
            }
        }
    return r;
}
document.write(`El resultado de pasarle la cadena "hola que tal estass yo bien y tu" y el valor "3" a la funcion <u>filtraPalabrasMasLargas</u> es: <b>` + filtraPalabrasMasLargas("hola que tal estass yo bien y tu", 3) + "</b><br>");




//E
function cadenaBienFormada(cad_arg){
    let r = cad_arg[0].toUpperCase();
        for(i=1; i<cad_arg.length; i++){
            r += cad_arg[i].toLowerCase();
        }
    return r;
}
document.write(`El resultado de pasarle la cadena "hOla QuE tAl EstAS" a la funcion <u>cadenaBienFormada</u> es: <b>` + cadenaBienFormada("hOla QuE tAl EstAS") + "</b><br>");
