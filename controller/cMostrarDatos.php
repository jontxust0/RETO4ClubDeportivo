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
else if ($tipo==2){
    $newEntrenador = new entrenadoresModel();
    $newEntrenador->setId($id);
    $newEntrenador->setEntrenadorById();
    echo $newEntrenador->getThisJsonString();
}

else if ($tipo==3){
    $newCuerpo = new cuerpoMedicoModel();
    $newCuerpo->setId($id);
    $newCuerpo->setCuerpoMedicoById();
    echo $newCuerpo->getThisJsonString();
}


?>