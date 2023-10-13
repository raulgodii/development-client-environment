function potencia(n, p){
    if(p==0)
        return 1;
    else
    return n * potencia(n, p-1);
}