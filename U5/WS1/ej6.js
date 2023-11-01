// Se desea realizar mediante DOM un visor de imágenes. Para ello en tu página se
// mostrará una imagen, junto a dos botones “Siguiente” y “Anterior”. Impleméntala la
// funcionalidad para poder navegar entre un conjunto de imágenes que tendrás
// previamente preparadas

window.onload = () => {
    imagenes = document.getElementById('imagenes');
    btn = document.getElementById('btn');

    listImg = imagenes.querySelectorAll("div");
    arrImg = Array.from(listImg);
    
    var i = 0;
    btn.addEventListener('click', () => {
        if(i+1 >= listImg.length){
            arrImg[i].style.display = "none";
            arrImg[0].style.display = "inline";
            i=0;
        } else {
            arrImg[i].style.display = "none";
            arrImg[i+1].style.display = "inline";
            i++;
        }
        
    });
}