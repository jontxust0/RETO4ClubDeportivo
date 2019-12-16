<?php
include_once ("../model/jugadoresModel.php");

$jugador= new jugadoresModel();
$jugador->setList(); 

$listaJugadoresJson=$jugador->getListJsonString();

echo $listaJugadoresJson;

unset ($jugador);

?>