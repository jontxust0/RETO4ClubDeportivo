<?php // 

require_once("../model/jugadoresClass.php");
require_once("../model/jugadoresModel.php");
$cont=new jugadoresModel();
$cont->setList();
$datos=$cont->getJSONList();

$jugadores=json_encode($datos);
echo($jugadores);   
?>