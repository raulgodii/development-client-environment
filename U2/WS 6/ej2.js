//C
document.write("El número de imágenes del documento es:" + document.images.length);

    var imagenes = document.querySelectorAll('img');

    console.log('Número de imágenes: ' + imagenes.length);

//D
var primeraImagen = document.querySelector("img");

if (primeraImagen) {
    document.write("ID de la primera imagen: " + primeraImagen.id);
} else {
    document.write("No se encontró ninguna imagen en el documento.");
}

//E
document.write("El numero de enlaces del documento es: " + document.URL.length);

//F
document.title = "Hola";

//Usa el objeto Location para abrir una nueva URL
window.location.href = 'https://www.google.com';