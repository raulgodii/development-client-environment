// Imagina que para una web que estás diseñando se te pide que en un apartado sólo se
// muestre una parte de un texto, y al pulsar un enlace “Ver Articulo Completo” se
// muestre el resto del texto. Implementa esta funcionalidad en una nueva página

window.onload = () => {
    const enlaceVerMas = document.getElementById('enlaceVerMas');
    const textoCompleto = document.getElementById('textoCompleto');

    enlaceVerMas.addEventListener('click', (event) => {
        event.preventDefault(); // Evita que el enlace recargue la página
        textoCompleto.style.display = 'inline'; // Muestra el texto completo
        enlaceVerMas.style.display = 'none'; // Oculta el enlace "Ver Articulo Completo"
    });
} 
