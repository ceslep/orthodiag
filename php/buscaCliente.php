<?php
    require("headers.php");
    require("datos_conexion.php");
    $mysqli = new mysqli($host, $user, $pass, $database);
    $datos=(object)json_decode(file_get_contents("php://input"));
    $sql = "select * from clientes";
    $sql .= " where identificacion='$datos->identificacion'";
    $result=$mysqli->query($sql);
    $datos=[];
    if ($result->num_rows>0)
    while($dato=$result->fetch_assoc()) $datos[]=$dato;
    else $datos[]=array("identificacion"=>"");
    echo json_encode($datos);
    $result->free();
    $mysqli->close();

?>
