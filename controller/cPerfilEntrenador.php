<?php

include_once ("../model/entrenadoresModel.php");

session_start();
$id= $_SESSION['id'];

$entrenador= new entrenadoresModel();
$entrenador->setId_usuario($id);
$entrenador->setEntrenadorByUserId();

$listaUsuariosJson=$entrenador->getThisJsonStringPerfil();

echo $listaUsuariosJson;



?>