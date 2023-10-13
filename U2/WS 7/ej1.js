function obtenerPosicion(coordenadas){
    let lat = coordenadas.coords.latitude;
    let lon = coordenadas.coords.longitude;
    document.getElementById("posicion").innerHTML = ("Distancia recorrida: " + (sumDistancia + getDistanciaMetros(latOrigen, lonOrigen, lat, lon)).toFixed(2) + " metros");
    sumDistancia += getDistanciaMetros(latOrigen, lonOrigen, lat, lon);
    latOrigen = lat;
    lonOrigen = lon;
}

function posicionActual(coordenadas){
    latOrigen = coordenadas.coords.latitude;
    lonOrigen = coordenadas.coords.longitude;
}

var latOrigen;
var lonOrigen;
var sumDistancia = 0;

function getDistanciaMetros(lat1,lon1,lat2,lon2)
{
  var rad = function(x) {return x*Math.PI/180;}
  var R = 6378.137; //Radio de la tierra en km 
  var dLat = rad( lat2 - lat1 );
  var dLong = rad( lon2 - lon1 );
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * 
  Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  //aquí obtienes la distancia en metros por la conversion 1Km =1000m
  var d = R * c * 1000; 
  return d ; 
}

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(posicionActual);
    navigator.geolocation.watchPosition(obtenerPosicion);
}
else{
    console.log("Geolocalizacion no soportada");
}

