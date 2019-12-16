<?php
include_once ("../model/entrenadoresModel.php");

$entrenador= new entrenadoresModel();
$entrenador->setList(); 

$listaEntrenadoresJson=$entrenador->getListJsonString();

echo $listaEntrenadoresJson;

unset ($entrenador);

?>