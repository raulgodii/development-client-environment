function validaCadena(cad_arg){
    r = "La cadena \"" + cad_arg + "\" contiene: ";
    may = false;
    min = false;

    for(i=0; i<cad_arg.length; i++){
        if(esMayuscula(cad_arg[i])){
            may=true;
        }
        if(esMinuscula(cad_arg[i])){
            min=true;
        }
    }

    if(may){
        if(min){
            r += "mezcla de ambas";
        } else{
            r += "solo mayusculas";
        }
    }else if(min){
        if(may){
            r += "mezcla de ambas";
        } else{
            r += "solo minusculas";
        }
    }

    return r;

}

function esMayuscula(letra)
{
    return letra === letra.toUpperCase();
}

function esMinuscula(letra)
{
    return letra === letra.toLowerCase();
} 