var com;
var prov;
var mun;
var ccom = null;
var cpro = null;
var cmum = null;

window.onload = () => {
    com = document.getElementById("com");
    prov = document.getElementById("prov");
    mun = document.getElementById("mun");

    prov.disabled = true;
    mun.disabled = true;

    loadDoc("com");

    com.addEventListener("change", ()=>{
        prov.disabled = false; 
        ccom = com.options[com.selectedIndex].getAttribute("value");
        loadDoc("prov");
        mun.disabled = true;
        mun.innerHTML = '';
        createSelect(mun);
    });

    prov.addEventListener("change", ()=>{
        mun.disabled = false; 
        cpro = prov.options[prov.selectedIndex].getAttribute("value");
        loadDoc("mun"); 
    });

    mun.addEventListener("change", ()=>{
        let cmun = mun.options[mun.selectedIndex].getAttribute("value");
        loadTiempo(cmun);
    });

}

function loadDoc(element) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        json = JSON.parse(this.response);
        switch(element){
            case 'com':
                for(let data of json.data){
                    let opt = document.createElement("option");
                    opt.setAttribute("value", data.CCOM);
                    opt.textContent = data.COM;
                    com.appendChild(opt);
                }
                break;
            case 'prov':
                prov.innerHTML = '';
                createSelect(prov);

                for(let data of json.data){
                    let opt = document.createElement("option");
                    opt.setAttribute("value", data.CPRO);
                    opt.textContent = data.PRO;
                    prov.appendChild(opt);
                }
                break;
            case 'mun':
                mun.innerHTML = '';
                createSelect(mun);

                for(let data of json.data){
                    let opt = document.createElement("option");
                    opt.setAttribute("value", data.CPRO+data.CMUM);
                    opt.textContent = data.DMUN50;
                    mun.appendChild(opt);
                }

                break;
        }
    }
    xhttp.open("GET", 'ej1.php?element='+element+'&ccom='+ccom+'&cpro='+cpro+'&cmum='+cmum , true);
    xhttp.send();
}

function createSelect(element){
    // Create select option
    opt = document.createElement("option");
    opt.setAttribute("value", "select");
    opt.textContent = "Select";
    element.appendChild(opt);
}

function loadTiempo(cmun) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        json = JSON.parse(this.response);

        let div = document.getElementById("tiempo");
        div.innerHTML = '';

        let provincia = document.createElement("h2");
        let municipio = document.createElement("h3");

        // Provincia
        provincia.textContent = json[0].provincia;

        // Municipio
        municipio.textContent = json[0].nombre;

        // Dia por dia
        
        let ul = document.createElement("ul");
        
        json[0].prediccion.dia.forEach(dia => {
            let li = document.createElement("li");
            li.textContent = dia.fecha;

            let ul2 = document.createElement("ul");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            li2.textContent = "Temp max: "+dia.temperatura.maxima;
            li3.textContent = "Temp min: "+dia.temperatura.minima;
            
            ul2.appendChild(li2);
            ul2.appendChild(li3);

            ul.appendChild(li);
            ul.appendChild(ul2);
        });

        div.appendChild(provincia);
        div.appendChild(municipio);
        div.appendChild(ul);
    }
    xhttp.open("GET", 'ej1b.php?cmun='+cmun, true);
    xhttp.send();
}