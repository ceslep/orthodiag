<?php
    require("headers.php");
    require("datos_conexion.php");
    $mysqli = new mysqli($host, $user, $pass, $database);
    $sql="select * from clientes";
    $datos=[];
    $result=$mysqli->query($sql);
    while($dato=$result->fetch_assoc()) $datos[]=$dato;
    echo json_encode($datos);
    $result->free();
    $mysqli->close();
?>