<?php 
	require_once("headers.php");
	$datos=json_decode(file_get_contents("php://input"));
	$path=utf8_decode($datos->dir);
	
	chdir($path);
	$path=getcwd();
	$dir = new DirectoryIterator($path);
	
$files=array();
foreach ($dir as $fileinfo) {
    if ($fileinfo->isDir() && !$fileinfo->isDot()) {
		chdir($path."/".$fileinfo->getFilename());
		$filesc=glob("*.{jpg,png,gif,jpeg,JPG,PNG,GIF,JPEG}", GLOB_BRACE);
		$filecount=0;
		if( $filesc ) {
			$filecount = count($filesc);
		}
		$files[]=array("atime"=>$fileinfo->getATime(),"mtime"=>$fileinfo->getMTime(),"directorio"=>utf8_encode($fileinfo->getFilename()),"cantidad"=>$filecount);
       
    }
}
echo json_encode($files);
	

?>