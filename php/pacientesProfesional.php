<?php
    include("headers.php");
    require("datos_conexion.php");
    $mysqli = new mysqli($host, $user, $pass, $database);
    $datos=(object)json_decode(file_get_contents("php://input"));
    $profesional=$datos->profesional;
    $sql="Select * from pacientesProfesional";
    $sql.=" where profesional='$profesional'";
    $datos=[];
    if ($result=$mysqli->query($sql)){
        while($dato=$result->fetch_assoc()) $datos[]=$dato;
        
    }    
    else
        $datos[]=array("mensaje"=>"ok");
    echo json_encode($datos);
    $result->free();
    $mysqli->close();
?>