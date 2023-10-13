function obtenerPosicion(coordenadas){
    console.log(coordenadas);
}

function error(){
    console.log("La geolocalizacion ha producido un error");
}

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(obtenerPosicion, error, options);
}
else{
    console.log("Geolocalizacion no soportada");
}