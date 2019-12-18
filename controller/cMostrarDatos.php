<?php
include_once '../model/jugadoresModel.php';
include_once '../model/entrenadoresModel.php';
include_once '../model/cuerpoMedicoModel.php';

$tipo=filter_input(INPUT_GET, 'tipo');
$id=filter_input(INPUT_GET, 'id');
if ($tipo==1){
    $newJugador = new jugadoresModel();
    $newJugador->setId($id);
    $newJugador->setJugadorById();
    echo $newJugador->getThisJsonString();
}



?>