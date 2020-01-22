<?php
include_once ("../model/jugadoresModel.php");
$id=filter_input(INPUT_GET, 'id');
$idEquipo=filter_input(INPUT_GET, 'idEquipo');
$dorsal=filter_input(INPUT_GET, 'dorsal');
$posicion=filter_input(INPUT_GET, 'posicion');
$altura=filter_input(INPUT_GET, 'altura');
$direccion=filter_input(INPUT_GET, 'direccion');
$telefono=filter_input(INPUT_GET, 'telefono');


$newEntrenador = new jugadoresModel();
$newEntrenador->setId_usuario($id);
if ($newEntrenador->checkJugador()==true){
    
    
    
    echo "si";
}
else{
    $newEntrenador->setId_equipo($idEquipo);
    $newEntrenador->setDorsal($dorsal);
    $newEntrenador->setPosicion($posicion);
    $newEntrenador->setAltura($altura);
    $newEntrenador->setDireccion($direccion);
    $newEntrenador->setTlf($telefono);
    $newEntrenador->insertJugador();
    echo "no";
}

