f = parseInt(prompt("Intrdoduce el numero de filas"));
c = parseInt(prompt("Introduce el numero de columnas"));
an = parseInt(prompt("Introduce la anchura"));
al = parseInt(prompt("Introduce la altura"));

document.write(`<table border="1" style="border-collapse: collapse">`);

    for(i=0; i<f; i++){
        document.write(`<tr height="${al}px">`);
            for(j=0; j<c; j++){
                document.write(`<td width="${an}px">&nbsp;</td>`);
            }
        document.write(`</tr>`);
    }

document.write(`</table>`);