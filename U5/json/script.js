var modeloDatos = {
    "notas":[]
};

window.onload = () => {
    // Definir eventos
    document.getElementById("boton").addEventListener("click", nuevaNota);

    // Leer localStorage
    if(window.localStorage.getItem("notas")){
        modeloDatos = JSON.parse(window.localStorage.getItem("notas"));
        muestraNotas(modeloDatos.notas);
    } else{
        console.log("no existe");
    }
}

function nuevaNota(){
    textoNota = document.getElementById("input").value;
    document.getElementById("input").value = "";
    modeloDatos.notas.push(textoNota);

    // Actulizar localStorage
    window.localStorage.setItem("notas", JSON.stringify(modeloDatos));

    muestraNotas(modeloDatos.notas);
}

function muestraNotas(arrayNotas){
    ul = document.getElementById("ul");
    ul.innerHTML = "";
    for(nota of arrayNotas){
        li = document.createElement("li");
        li.innerHTML = nota;

        ul.appendChild(li);
    }
}