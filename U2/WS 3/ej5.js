function eliminaRepetidos(cad_arg){
    r = "";

    for(i=0; i<cad_arg.length; i++){
        if(r.indexOf(cad_arg[i])==-1 && cad_arg[i]!=" "){
            r+=cad_arg[i];
        }
    }

    return r;
}