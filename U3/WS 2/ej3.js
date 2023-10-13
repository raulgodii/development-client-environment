tablero = [
    [34, 21, 32, 41, 24],
    [14, 42, 43, 14, 31],
    [54, 45, 52, 42, 23],
    [33, 15, 51, 31, 35],
    [21, 52, 33, 13, 23],
    ];

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

encuentraSolucion(tablero);
