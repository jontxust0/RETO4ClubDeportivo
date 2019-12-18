<?php

include_once ("../model/cuerpoMedicoModel.php");

session_start();
$id= $_SESSION['id'];

$cuerpoMedico= new cuerpoMedicoModel();
$cuerpoMedico->setId_usuario($id);
$cuerpoMedico->setCuerpoMedicoByUserId();

$listaUsuariosJson=$cuerpoMedico->getThisJsonString();

echo $listaUsuariosJson;



?>