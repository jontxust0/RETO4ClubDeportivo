<?php
require_once '../model/jugadoresModel.php';

$direccion=filter_input(INPUT_POST, 'insJDireccion');
$dorsal=filter_input(INPUT_POST, 'insJDorsal');
$posicion=filter_input(INPUT_POST, 'insJPosicion');
$tlf=filter_input(INPUT_POST, 'insJTelefono');
$altura=filter_input(INPUT_POST, 'insJAltura');
$id_datosMedicos=filter_input(INPUT_POST, 'insJIdDatosMedicos');
$id_usuario=filter_input(INPUT_POST, 'insJIdDatosMedicos');
$id_equipo=filter_input(INPUT_POST, 'insJIdEquipo');

$user=new jugadoresModel();
$user->setDireccion($direccion);
$user->setDorsal($dorsal);
$user->setPosicion($posicion);
$user->setTlf($tlf);
$user->setAltura($altura);
$user->setId_datosMedicos($id_datosMedicos);
$user->setId_usuario($id_usuario);
$user->setId_equipo($id_equipo);




$resultado=$user->insertJugador();
echo $resultado;
