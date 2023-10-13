function numPalabras(cad_arg){

    aux = cad_arg.replace(/ +/g, ' ').trim().split(" ");

    if(aux[0]==''){
        return 0;
    }

    return aux.length;
}

