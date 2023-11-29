var sugerencias, checkName, usuarioInput;

window.onload = () => {
    sugerencias = document.getElementById("sugerencias");
    checkName = document.getElementById("checkName");
    usuarioInput = document.getElementById("usuario");

    usuarioInput.addEventListener("keydown", loadDoc);

}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let usuariosRegistrados = JSON.parse(this.responseText);
            for(let usuario of usuariosRegistrados){
                if(usuario == usuarioInput.value){
                    checkName.textContent = "Usuario ya registrado";
                    checkName.style.color = "red";
                    sugerenciasf()
                    break;
                } else {
                    checkName.textContent = "Usuario disponible";
                    checkName.style.color = "green";
                    sugerencias.innerHTML = "";
                }
            }
        }
    };
    xhttp.open("GET", "ej4.php", true);
    xhttp.send();
}

function sugerenciasf(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let usuarioIntroducido = usuarioInput.value;
            let usuariosRegistrados = JSON.parse(this.responseText);
            let arraySugerencias = [];
            let cont = 0;

            while(arraySugerencias.length<4){
                let sugerencia = usuarioIntroducido+cont;
                let existe = false;

                for(let us of usuariosRegistrados){
                    if(sugerencia==us){
                        existe = true;
                        break;
                    }
                }

                if(!existe){
                    arraySugerencias.push(sugerencia);
                    cont++;
                }
            }
            
            sugerencias.innerHTML = "";
            ul = document.createElement("ul");
            p = document.createElement("p");
            p.textContent = "Usuarios sugeridos:";
            ul.appendChild(p);

            for(let sug of arraySugerencias){
                let li = document.createElement("li")
                li.textContent = sug;
                ul.appendChild(li);
            }

            sugerencias.appendChild(ul);

        }
    };
    xhttp.open("GET", "ej4.php", true);
    xhttp.send();
}