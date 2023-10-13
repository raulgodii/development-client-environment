function palabraFormateada(cad_arg){
    document.write(`<table>`);

    for(i=0; i<cad_arg.length; i++){
        document.write(`<tr>`);
        if(i==0){
            for(j=0; j<cad_arg.length; j++){
                document.write(`<td>` + cad_arg[j] + `</td>`);
            }
        }else if(i==(cad_arg.length-1)){
            for(j=(cad_arg.length-1); j>=0; j--){
                document.write(`<td>` + cad_arg[j] + `</td>`);
            }
        }else{
            for(j=0; j<cad_arg.length; j++){
                if(j==0){
                    document.write(`<td>` + cad_arg[j+i] + `</td>`);
                }else if(j==(cad_arg.length-1)){
                    document.write(`<td>` + cad_arg[j-i] + `</td>`);
                }else{
                    document.write(`<td>&nbsp;</td>`);
                }
            }
        }
        
        document.write(`</tr>`);
    }

    document.write(`</table>`);
}

palabraFormateada("ADIOS");