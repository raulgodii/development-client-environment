function addOnlyNums(...a){
    let suma = 0;
    for(i=0; i<a.length; i++){
        let num = a[i];
        if(!isNaN(num)){
            suma = suma + num;
        }
    }
    return suma;
}