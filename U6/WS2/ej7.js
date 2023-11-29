
window.onload = () => {
    enviar = document.getElementById("enviar");

    enviar.addEventListener("click", loadDoc);
}

function loadDoc() {
    console.log("enviado")
    var xhttp = new XMLHttpRequest();
    cpInput = document.getElementById("cp");
    cp = cpInput.value;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
        }
    };
    xhttp.open("GET", "ej7.php?cp="+cp, true);
    xhttp.send();
}

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    console.log(xmlDoc);

    // dias = xmlDoc.getElementsByTagName('dia');
    // console.log(dias);
}