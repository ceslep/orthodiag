<?php
    require("headers.php");
    require("datos_conexion.php");
    $mysqli = new mysqli($host,$user,$pass,$database);
    $datos=(object)json_decode(file_get_contents("php://input"));
    $id=$datos->id;
    $sql="delete from clientes where id='$id'";
    $datos=[];
    if($mysqli->query($sql))
        $datos[]=array("mensaje"=>"ok");
     else
        $datos[]=array("mensaje"=>"ok");
    echo json_encode($datos);    
    $mysqli->close();    
?>