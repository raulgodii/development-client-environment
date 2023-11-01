// Crea una web con una lista de elementos y un botón que cada vez que pulsemos
// introduzca una entrada nueva en la lista.

window.onload = () => {
    const ul = document.getElementById('ul'); // Lista
    const btn = document.getElementById('btn'); // Boton
    var cont = 0;
    var primeraVez = true;

    btn.addEventListener('click', () => {
        if(primeraVez){ // Si entra por primera vez elimina el contenido
            // while (ul.firstChild) {
            //     ul.removeChild(ul.firstChild);
            // } // Elimina el contenido de la lista
            ul.textContent = '';
            primeraVez = false;
        }

        let entrada = document.createElement("li"); // Crea un nuevo li
        entrada.innerHTML = 'Entrada ' + cont;
        cont++;
        
        ul.appendChild(entrada);
        
    });
    
}