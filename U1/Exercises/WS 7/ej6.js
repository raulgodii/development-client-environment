function onlyUniques(...a){
    let r = [""];
    for(i=0; i<a.length; i++){
        if(!a.includes(a[i])){
            r = r + a[i];
        }
    }
    return r;
}