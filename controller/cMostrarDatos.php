<?php
include_once '../model/jugadoresModel.php';
include_once '../model/entrenadoresModel.php';
include_once '../model/cuerpoMedicoModel.php';

$tipo=filter_input(INPUT_GET, 'tipo');
$id=filter_input(INPUT_GET, 'id');
if ($tipo==1){
    $newEntrenador = new jugadoresModel();
    $newEntrenador->setId($id);
    $newEntrenador->setJugadorById();
    echo $newEntrenador->getThisJsonString();
}
else if ($tipo==2){
    $newEntrenador = new entrenadoresModel();
    $newEntrenador->setId($id);
    $newEntrenador->setEntrenadorById();
    echo $newEntrenador->getThisJsonString();
}

else if ($tipo==3){
    $newEntrenador = new cuerpoMedicoModel();
    $newEntrenador->setId($id);
    $newEntrenador->setCuerpoMedicoById();
    echo $newEntrenador->getThisJsonString();
}


?>