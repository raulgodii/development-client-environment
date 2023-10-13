a = parseInt(prompt("Intrdoduce la longitud de la celda"));

document.write(`<table border="2" style="border-collapse: collapse">`);

    for(i=0; i<8; i++){
        document.write(`<tr height="${a}px">`);
            for(j=0; j<8; j++){
                if(i%2==0){
                    if(j%2==0){
                        document.write(`<td bgcolor="black" width="${a}px">&nbsp;</td>`);
                    }else{
                        document.write(`<td width="${a}px">&nbsp;</td>`);
                    }
                } else{
                    if(j%2!=0){
                        document.write(`<td bgcolor="black" width="${a}px">&nbsp;</td>`);
                    }else{
                        document.write(`<td width="${a}px">&nbsp;</td>`);
                    }
                }
            }
        document.write(`</tr>`);
    }

document.write(`</table>`);