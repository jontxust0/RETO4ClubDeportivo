<?php
include_once ("../model/cuerpoMedicoModel.php");

$cuerpoMedico= new cuerpoMedicoModel();
$cuerpoMedico->setList();

$listaCuerpoJson=$cuerpoMedico->getListJsonString();

echo $listaCuerpoJson;

unset ($cuerpoMedico);


?>