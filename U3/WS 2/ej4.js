function encuentraSolucion(tablero){
    solucion = false;
    c = 0;
    f = 0;
    
    while(!solucion){
        n = tablero[f][c];
        nf = Math.floor(n/10);
        nc = Math.floor(n%10);
    
        if(nf == f+1 && nc == c+1){
            document.write("<b>Enhorabuena! Has encontrado la solucion: " + nf + ", " + nc + "</b>");
            solucion = true;
        } else {
            document.write("- Pasamos de la posicion " + (f+1) + ", " + (c+1) + " a la " + nf + ", " + nc + "<br>");
            f = nf-1;
            c = nc-1;
        }
    }
}

function generaTablero(){

    nums = [];

    while(nums.length<3){
        random = Math.floor(Math.random()*(51-11)+11);
        if(!nums.includes(random) && (random%10)<6)
            nums.push(random);
    }

    solucion = nums[0];
    fsol = Math.floor(solucion/10)-1;
    csol = Math.floor(solucion%10)-1;

    p1 = solucion;
    fp1 = Math.floor(nums[1]/10)-1;
    cp1 = Math.floor(nums[1]%10)-1;

    p2 = nums[1];
    fp2 = Math.floor(nums[2]/10)-1;
    cp2 = Math.floor(nums[2]%10)-1;

    tablero = [[],[],[],[],[]];

    for(i=0; i<5; i++){
        for(j=0; j<5; j++){
            random = Math.floor(Math.random()*(51-10)+10);
            if((random%10)<6)
                tablero[i][j] = random;
            else
                j--;
        }
    }

    tablero[fsol][csol] = solucion;
    tablero[fp1][cp1] = p1;
    tablero[fp2][cp2] = p2;

    return tablero;
    
}  

tablero = generaTablero();

encuentraSolucion(tablero);
