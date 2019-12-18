<?php

include_once ("../model/jugadoresModel.php");

$jugador=new jugadoresModel();

$id=filter_input(INPUT_GET,"id");


if (isset($id))
{
    $jugador->setId($id);
}

$resultado=$jugador->delete();
echo $resultado;

//header('Location: ../index.php');
?>