<?php // 

require_once("../model/jugadoresClass.php");
require_once("../model/jugadoresModel.php");
$jugadores=new jugadoresModel();
$jugadores->setList();
$datos=$jugadores->getJSONList();

$jugadores=json_encode($datos);
echo($jugadores);   
?>