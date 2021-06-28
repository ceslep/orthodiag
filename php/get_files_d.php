<?php 
	require_once("headers.php");
	include_once('thumb.php');
	
	function imgto64($path,$img){
		//$imgpath   = $path.'\\'.$img;
		$imgpath   = $img;
		$imginfo   = getimagesize($imgpath);
		$mimetype  = $imginfo['mime'];
		$imageData = base64_encode(file_get_contents($imgpath));

		$src = 'data:' . $mimetype . ';base64,' . $imageData;
		return $src;
	}
	
	setlocale(LC_ALL, "es_CO.UTF-8");
	
	$datos=json_decode(file_get_contents("php://input"));
	$path=utf8_decode($datos->path);
	$dir=utf8_decode($datos->dir);
	

	chdir($path);
	chdir($dir);
	
	$path=getcwd();
	$path=utf8_encode($path);
	
	

$files=array();
$fileList = glob("*.*", GLOB_BRACE);

	foreach($fileList as $filename){
	if(is_file($filename)){
         $files[]=array("directory"=>$path,"imageFile"=>$filename,"src"=>imgto64($path,$filename),"imageFileFull"=>substr($filename,1));
    }
	}
	$files=json_encode($files);
			header('Content-Length: '.strlen($files));	
			echo $files;

?>