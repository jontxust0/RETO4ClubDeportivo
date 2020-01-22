<?php
include_once ("../model/cuerpoMedicoModel.php");
$id=filter_input(INPUT_GET, 'id');
$idEquipo=filter_input(INPUT_GET, 'idEquipo');
$funcion=filter_input(INPUT_GET, 'funcion');
$direccion=filter_input(INPUT_GET, 'direccion');
$telefono=filter_input(INPUT_GET, 'telefono');

$newEntrenador = new cuerpoMedicoModel();
$newEntrenador->setId_usuario($id);

if ($newEntrenador->checkCuerpo()==true){

    
    
    echo "si";
}
else{
    $newEntrenador->setId_equipo($idEquipo);
    $newEntrenador->setFuncion($funcion);
    $newEntrenador->setDireccion($direccion);
    $newEntrenador->setTlf($telefono);
    $newEntrenador->insertCuerpo();
    echo "no";
}

?>