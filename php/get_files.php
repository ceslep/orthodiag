<?php 
	require_once("headers.php");
	$datos=json_decode(file_get_contents("php://input"));
	$cliente=$datos->cliente;
	$path=sprintf("c:/pacientes/*%s*",$cliente);
	$dir = glob($path,GLOB_ONLYDIR);
	$files=array();

	foreach ($dir as $nombre) {
	
		$files[]=array("path"=>$nombre,"directorio"=>basename($nombre));
      
    }

echo json_encode($files);
?>