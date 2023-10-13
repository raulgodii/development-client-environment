function esPalindromo(cad_arg){
    cad_arg = quitaEspacios(cad_arg.toLowerCase());
    aux = quitaEspacios(invierteCadena(cad_arg));

    return cad_arg == aux;
}

function invierteCadena(cad_arg){
    let r = "";
        for(i=cad_arg.length-1; i>=0; i--){
            r = r + cad_arg[i];
        }
    return r;
}

function quitaEspacios(cad_arg){
    let r = ""
    for(i=0; i<cad_arg.length; i++){
        if(cad_arg[i]!=" "){
            r = r + cad_arg[i];
        }
    }
    return r;
}