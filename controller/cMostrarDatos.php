<?php
include_once '../model/jugadoresModel.php';
include_once '../model/entrenadoresModel.php';
include_once '../model/cuerpoMedicoModel.php';

$tipo=filter_input(INPUT_POST, 'tipo');
$id=filter_input(INPUT_POST, 'id');
if ($tipo==1){
    $newJugador = new jugadoresModel();
    $newJugador->setId($id);
   
}



?>