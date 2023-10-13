function separaVocales(cad_arg){
    vocales = "";
    consonantes = "";

    for(i=0; i<cad_arg.length; i++){
        if(esVocal(cad_arg[i])){
            vocales += cad_arg[i];
        } else if(esConsonante(cad_arg[i])){
            consonantes += cad_arg[i];
        }
    }

    return consonantes+vocales;
}

function esVocal(letra) {
    letra = letra.toLowerCase();
  
    if (letra.match(/[aeiou]/)) {
      return true; // Es una vocal
    } else {
      return false; // No es una vocal
    }
}

function esConsonante(caracter) {
    caracter = caracter.toLowerCase();
  
    if (caracter.match(/[a-z]/) && !caracter.match(/[aeiou]/)) {
      return true; // Es una consonante
    } else {
      return false; // No es una consonante
    }
}