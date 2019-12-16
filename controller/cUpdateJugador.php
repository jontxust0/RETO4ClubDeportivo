<?php

include_once ("../model/jugadoresModel.php");

$jugador=new jugadoresModel();

$id=filter_input(INPUT_GET,"id");
if (isset($id))
{
    $jugador->setId($id);
}

$direccion=filter_input(INPUT_GET,"direccion");
if (isset($direccion))
{
    $jugador->setDireccion($direccion);
}
$dorsal= filter_input(INPUT_GET,"dorsal");
if (isset($dorsal))
{
    $jugador->setDorsal($dorsal);
}
$posicion=filter_input(INPUT_GET,"posicion");
if (isset($posicion))
{
    $jugador->setPosicion($posicion);
}
$tlf=filter_input(INPUT_GET,"tlf");
if (isset($tlf))
{
    $jugador->setTlf($tlf);
}

$altura=filter_input(INPUT_GET,"altura");
if (isset($altura))
{
    $jugador->setAltura($altura);
}

$resultado=$jugador->Update();

echo $resultado;

//header('Location: ../index.php');
?>