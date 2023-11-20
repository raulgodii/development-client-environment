<?php

    $key = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYXVsZ29kaWkxM0BnbWFpbC5jb20iLCJqdGkiOiIyMmVhOGIxZi1lMTlkLTQxYTMtYjU0MC04MjU0NzE5MDcwMTkiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTcwMDQ5ODc0NCwidXNlcklkIjoiMjJlYThiMWYtZTE5ZC00MWEzLWI1NDAtODI1NDcxOTA3MDE5Iiwicm9sZSI6IiJ9.5BUbzZrS38FzZy5jhcMr78vPGw99vtoj-ykMxaOa6Jo";
    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        $cmun = $_GET["cmun"]; 

        $url = "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/$cmun/?api_key=$key";
        $json = file_get_contents($url);

        $data = json_decode($json, true);

        $url2 = $data["datos"];

        echo file_get_contents($url2);

    }
?>