<?php
include("headers.php");
require("datos_conexion.php");
$mysqli = new mysqli($host, $user, $pass, $database);
$datos=(object)json_decode(file_get_contents("php://input"));
$email=$datos->usuario;
$password=$datos->contrasena;

$sql = "select * from profesionales";
$sql .= " where correo='$email' and password=password('$password')";

$datos = array();
if ($result = $mysqli->query($sql)) {
    if ($result->num_rows > 0) $datos[] = array("concedido"=> true);
    else $datos[] = array("concedido" => false);
} else {
    $datos[] = array("mensaje" => "ha ocurrido un error","sql"=>$sql);
}
echo json_encode($datos);
$result->free();
$mysqli->close();
