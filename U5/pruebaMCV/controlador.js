var miListaLibros;
window.onload = () => {

    //  Creo los datos
    miListaLibros = new ListaLectura();

    // Defino eventos
    document.getElementById("btnAlta").addEventListener("click", altaLibro);
}

function altaLibro(){
    let tit = document.getElementById("inputTit").value;
    let aut = document.getElementById("inputAut").value;
    let año = document.getElementById("inputAño").value;

    let nuevoLibro = new Libro(tit, aut, año);
    miListaLibros.addLibro(nuevoLibro);
    actualizarVista();
}

function actualizarVista(){
    //vistaSimple("misLibros", miListaLibros.listaLibros);
    vistaCompleja("misLibros", miListaLibros.listaLibros);
}