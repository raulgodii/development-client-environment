function squareAndSum(...a){
    suma = 0;

    for(i=0; i<a.length; i++){
        if(!isNaN(a[i])){
            suma = suma + Math.pow(a[i], 2);
        } 
    }
    
    return suma;
}