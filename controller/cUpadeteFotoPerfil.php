<?php

include_once ("../model/userModel.php");

$arr=array();





session_start();
$name="";
$type=-1; // alert not logged
$PHPSESSID=session_id();

if (isset($_SESSION['name']) )
{
    $name=$_SESSION['name'];

} 




$user=new userModel();

$id=filter_input(INPUT_POST,"idUser");
if (isset($id))
{
    $user->setIdUser($id);
}

$filename=filter_input(INPUT_POST,"filename");

if (isset($filename))
{
    $user->setPic($filename);
}
$savedFileBase64=filter_input(INPUT_POST, 'savedFileBase64');



 //function insert en pelicula_model

/*Llega $_POST["savedFileBase64"] ==> 'data:image/png;base64,AAAFBfj42Pj4...';
 Se obtiene el contenido limpio del fichero, sin cabecera de tipo de archivo
 */

$fileBase64 = explode(',', $savedFileBase64)[1];

// Se convierte de base64 a binario/texto para almacenarlo
$file = base64_decode($fileBase64);

/*Se especifica el directorio donde se almacenarán los ficheros(se crea si no existe)*/
$writable_dir = '../uploads/';

if(!is_dir($writable_dir)){mkdir($writable_dir);}

//Se escribe el archivo

file_put_contents($writable_dir.$filename, $file,  LOCK_EX);
$resultado=$user->UpdateFoto();
$_SESSION['img']="../uploads/".$filename;
$arr['name']=$name;
$arr['PHPSESSID']=$PHPSESSID;
$arr['resultado']=$resultado;
$arr['filename']=$filename;
$arr['fileBase64']=$fileBase64;


echo json_encode($arr);


