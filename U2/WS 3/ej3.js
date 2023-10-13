function localizarSubCadena(cad, subcad){
    r = 0;
    aux = cad.split(" ");

    for(i=0; i<aux.length; i++){
        if(aux[i] == subcad){
            r++;
        }
    }

    return r;
}