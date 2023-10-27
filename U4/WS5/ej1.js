// validarMayuscula: El parámetro debe contener al menos un carácter en mayúscula
function validarMayuscula(cad){
    var regex = /[A-Z]+/;
    return regex.test(cad);
}

// validarCaracteresEspeciales: El parámetro debe contener al menos uno de los siguientes caracteres: !@#$%^&
function validarCaracteresEspeciales(cad){
    var regex = /[!@#$%^&]+/;
    return regex.test(cad);
}

// validarCorreo: El parámetro debe tener el formato correcto de un email
function validarCorreo(cad){
    var regex = /^[\w]+[@][\w]+[.][\w]+$/;
    return regex.test(cad);
}

// validarTarjetaCredito: El parámetro debe tener el formato correcto de una tarjeta de crédito
function validarTarjetaCredito(cad){
    var regex = /^\d{16}$/;
    return regex.test(cad);
}

// validarLongitud: El parámetro debe tener al menos 8 caracteres.
function validarLongitud(cad){
    var regex = /^.{8,}$/;
    return regex.test(cad);
}

// validarNumero: El parámetro debe contener al menos un dígito.
function validarNumero(cad){
    var regex = /\d+/;
    return regex.test(cad);
}