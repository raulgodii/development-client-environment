function sumEveryOther(...a){
    let suma = 0;
    for(i=0; i<a.length; i++){
        if(i%2==0){
            suma+=a[i];
        }
    }
    return suma;
}