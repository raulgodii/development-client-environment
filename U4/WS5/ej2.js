window.onload = () => {
     nombre = document.getElementById("nombre");
     errorNombre = document.getElementById("errorNombre");

     apellidos = document.getElementById("apellidos");
     errorApellidos = document.getElementById("errorApellidos");

     dni = document.getElementById("dni");
     errorDni = document.getElementById("errorDni");

     telefono = document.getElementById("telefono");
     errorTelefono = document.getElementById("errorTelefono");

     email = document.getElementById("email");
     errorEmail = document.getElementById("errorEmail");

     usuario = document.getElementById("usuario");
     errorUsuario = document.getElementById("errorUsuario");

     submit = document.getElementById("submit");

     submit.addEventListener("click", (e) =>{
        checkValues();
     });
}

function validaNombre(cad){
    let regex = / /;
    return regex.test(cad);
}

function validaApellidos(cad){
    var regex = / /;
    return regex.test(cad);
}

function validaDni(cad){
    let regex = / /;
    return regex.test(cad);
}

function validaTelefono(cad){
    let regex = / /;
    return regex.test(cad);
}

function validaEmail(cad){
    let regex = / /;
    return regex.test(cad);
}

function validaUsuario(cad){
    let regex = / /;
    return regex.test(cad);
}

function checkValues(){
    
}