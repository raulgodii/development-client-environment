
function iniciarContador() {
    let segundos = 10; 

    function contar() {
        if (segundos == 0) {
            window.location.href = "https://www.google.com";
        } else {
            document.write(segundos + " segundos restantes <br>");
            segundos--; 
            setTimeout(contar, 1000); 
        }
    }

    contar();
}

iniciarContador();
  