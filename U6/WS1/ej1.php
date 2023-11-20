<?php
    $key = "881b00afc4d6e626e8aa3d12e6c6cf8788d33c71d0e30a4f3421899c6c112ece";
    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        $element = $_GET["element"]; 
        $ccom = $_GET["ccom"]; 
        $cpro = $_GET["cpro"];
        $cmum = $_GET["cmum"];

        switch($element){
            case 'com':
                    $url = "https://apiv1.geoapi.es/comunidades?type=JSON&key=$key&sandbox=1";
                    echo file_get_contents($url);
                break;
            case 'prov':
                $url = "https://apiv1.geoapi.es/provincias?CCOM=$ccom&type=JSON&key=$key&sandbox=1";
                    echo file_get_contents($url);
                break;
            case 'mun':
                $url = "https://apiv1.geoapi.es/municipios?CPRO=$cpro&type=JSON&key=$key&sandbox=1";
                    echo file_get_contents($url);
                break;
        }

    }
?>