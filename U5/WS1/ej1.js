window.onload = () => {

    // Obtener los párrafos y enlaces de la página
    const parrafos = document.querySelectorAll('p');
    const enlaces = document.querySelectorAll('a');
    const resultado = document.getElementById("resultado");

    // Mostrar el número de enlaces de la página
    var nenlaces = document.createElement("p");
    nenlaces.innerHTML = ' - Número de enlaces de la página: '+ enlaces.length;
    resultado.appendChild(nenlaces);

    // Obtener la dirección a la que enlaza el penúltimo enlace
    var penlace = document.createElement("p");
    if (enlaces.length >= 2) {
        const penultimoEnlace = enlaces[enlaces.length - 2];
        penlace.innerHTML = ' - Dirección a la que enlaza el penúltimo enlace: ' + penultimoEnlace.href;
    } else {
        penlace.innerHTML = ' - No hay penúltimo enlace.';
    }
    resultado.appendChild(penlace); 

    // Contar el número de enlaces que enlazan a google
    var ngoogle = document.createElement("p");
    const enlacesAGoogle = Array.from(enlaces).filter(enlace => enlace.href.includes('google')).length;
    ngoogle.innerHTML = '- Número de enlaces que enlazan a Google: ' + enlacesAGoogle;
    resultado.appendChild(ngoogle);

    // Obtener el número de enlaces del tercer párrafo
    ntercerparrafo = document.createElement("p");
    const tercerParrafoEnlaces = parrafos[2].querySelectorAll('a').length;
    ntercerparrafo.innerHTML = ' - Número de enlaces del tercer párrafo: ' + tercerParrafoEnlaces;
    resultado.appendChild(ntercerparrafo);
}

