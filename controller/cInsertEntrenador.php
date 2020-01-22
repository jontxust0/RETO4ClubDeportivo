<?php
include_once ("../model/entrenadoresModel.php");
$id=filter_input(INPUT_GET, 'id');
$idEquipo=filter_input(INPUT_GET, 'idEquipo');
$sueldo=filter_input(INPUT_GET, 'sueldo');

$direccion=filter_input(INPUT_GET, 'direccion');
$telefono=filter_input(INPUT_GET, 'telefono');


$newEntrenador = new entrenadoresModel();
$newEntrenador->setId_usuario($id);
if ($newEntrenador->checkEntrenador()==true){

    echo "si";
}
else{
    $newEntrenador->setId_equipo($idEquipo);
    $newEntrenador->setSueldo($sueldo);
    $newEntrenador->setDireccion($direccion);
    $newEntrenador->setTlf($telefono);
    $newEntrenador->insertEntrenador();
    echo "no";
}
