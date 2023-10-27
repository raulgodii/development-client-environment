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
        if(!checkValues()){
            e.preventDefault();
        }
     });
}

function validaNombre(cad){
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]+$/;
    res = regex.test(cad);
    if(!res){
        errorNombre.innerHTML = "ERROR: ¡El nombre es incorrecto!"
    }else{
        errorNombre.innerHTML= "";
    }
    return res;
}

function validaApellidos(cad){
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]+$/;
    res = regex.test(cad);
    if(!res){
        errorApellidos.innerHTML = "ERROR: ¡El apellido es incorrecto!"
    }else{
        errorApellidos.innerHTML= "";
    }
    return res;
}

function validaDni(cad){
    let regex = /^\d{8}[a-zA-Z]$/;
    res = regex.test(cad);
    if(!res){
        errorDni.innerHTML = "ERROR: ¡El DNI es incorrecto!"
    }else{
        errorDni.innerHTML= "";
    }
    return res;
}

function validaTelefono(cad){
    let regex = /^\d{9}$/;
    res = regex.test(cad);
    if(!res){
        errorTelefono.innerHTML = "ERROR: ¡El telefono es incorrecto!"
    }else{
        errorTelefono.innerHTML= "";
    }
    return res;
}

function validaEmail(cad){
    var regex = /^[\w]+[@][\w]+[.][\w]+$/;
    res = regex.test(cad);
    if(!res){
        errorEmail.innerHTML = "ERROR: ¡El email es incorrecto!"
    }else{
        errorEmail.innerHTML= "";
    }
    return res;
}

function validaUsuario(cad){
    let regex = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-zA-Z]).{8,}$/;
    res = regex.test(cad);
    if(!res){
        errorUsuario.innerHTML = "ERROR: ¡El nombre de usuario debe estar formado por al menos 8 caracteres, entre los cuales debe aparecer obligatoriamente algún número y algún signo de puntuación!"
    }else{
        errorUsuario.innerHTML= "";
    }
    return res;
}

function checkValues(){

    validaNombre(nombre.value);
    validaApellidos(apellidos.value);
    validaDni(dni.value);
    validaTelefono(telefono.value);
    validaEmail(email.value);
    validaUsuario(usuario.value);
    
    return validaNombre(nombre.value) && validaApellidos(apellidos.value) && validaDni(dni.value) && validaTelefono(telefono.value) && validaEmail(email.value) && validaUsuario(usuario.value);
}