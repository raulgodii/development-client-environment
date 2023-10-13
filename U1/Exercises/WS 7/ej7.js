function combineAllArrays(...args){
    arrayCombinado=[];
    for(i=0;i<args.length;i++){
        arrayCombinado=[...arrayCombinado,...args[i]];
    }
    return arrayCombinado;
}