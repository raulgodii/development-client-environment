
function iniciarContador() {
    let segundos = 60; 

    function contar() {
        if (segundos == 0) {
            document.write("¡Tiempo agotado!");
        } else {
            document.write(segundos + " segundos restantes <br>");
            segundos--; 
            setTimeout(contar, 1000); 
        }
    }

    contar();
}

iniciarContador();
  