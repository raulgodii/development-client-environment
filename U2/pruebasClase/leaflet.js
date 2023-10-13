
function obtenerPosicion(coordenadas){
    let lat = coordenadas.coords.latitude;
    let lon = coordenadas.coords.longitude;

    var map = L.map('map').setView([lat, lon], 13);

    var marker = L.marker([lat, lon]).addTo(map);

    var circle = L.circle([lat, lon], {
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);

    marker.bindPopup("<b>Usted está aquí</b>").openPopup();

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

}

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(obtenerPosicion);
}
else{
    console.log("Geolocalizacion no soportada");
}


