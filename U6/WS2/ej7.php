<?php
    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        // Obtener el código postal del formulario
        $codigo_postal = $_GET["cp"];

        // Construir la URL de la AEMET
        $url_aemet = "http://www.aemet.es/xml/municipios/localidad_" . $codigo_postal . ".xml";

        // Realizar la solicitud HTTP a la AEMET y obtener los datos meteorológicos en formato XML
        $datos_meteorologicos = file_get_contents($url_aemet);

        echo $datos_meteorologicos;
    }
?>
