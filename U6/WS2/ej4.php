<?php
    // Generar una lista de nombres de usuario
    $usernames = array(
        "usuario1",
        "usuario2",
        "usuario3",
        "usuario4",
        "usuario5"
    );

    // Convertir la lista a formato JSON
    $json_data = json_encode($usernames);

    // Devolver el JSON
    echo $json_data;
?>