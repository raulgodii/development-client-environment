// Estás diseñando una aplicación web para subir ficheros al servidor. Haciendo uso de
// DOM, consigue que el usuario pueda adjuntar tantos ficheros como desee. Por tanto
// inicialmente será necesario un input de tipo fichero, un botón “Adjuntar otro fichero”
// y un segundo botón “Enviar”, de modo que al pulsar el primero de los botones
// automáticamente aparezca otro input para elegir fichero.


window.onload = () => {
    const btn = document.getElementById('btn');
    const newInputs = document.getElementById('newInputs');

    btn.addEventListener('click', (e)=>{
        e.preventDefault();
        let input = document.createElement("input");
        input.setAttribute("type", "file");

        newInputs.appendChild(input);
    });
}