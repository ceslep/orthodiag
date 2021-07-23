<?php
    require("headers.php");
    require("datos_conexion.php");
    $mysqli = new mysqli($host, $user, $pass, $database);
    $datos=(object)json_decode(file_get_contents("php://input"));
    $fields=[];
    $values=[];
    foreach($datos as $key => $value) 
    {
         
        $fields[]=$key;
        if ($value=="") 
        $values[]=sprintf("NULL",$value);
        else
        $values[]=sprintf("'%s'",$value);
    
    }
    $fields=implode(",",$fields);
    $values=implode(",",$values);
    $sql=sprintf("replace into clientes (%s) values (%s)",$fields,$values);
    $datos=[];
    if($mysqli->query($sql))
        $datos[]=array("mensaje"=>"almacenado correctamente");
    else
    $datos[]=array("mensaje"=>"ha ocurrido un error");
    echo json_encode($datos);
    $mysqli->close();
    

   
    
?>