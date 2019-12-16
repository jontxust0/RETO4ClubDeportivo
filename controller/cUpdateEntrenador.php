<?php

include_once ("../model/entrenadoresModel.php");

$entrenador=new entrenadoresModel();

$id=filter_input(INPUT_GET,"id");
if (isset($id))
{
    $entrenador->setId($id);
}

$tlf=filter_input(INPUT_GET,"telefono");
if (isset($tlf))
{
    $entrenador->setTlf($tlf);
}
$direccion= filter_input(INPUT_GET,"direccion");
if (isset($direccion))
{
    $entrenador->setDireccion($direccion);
}
$sueldo=filter_input(INPUT_GET,"sueldo");
if (isset($sueldo))
{
    $entrenador->setSueldo($sueldo);
}
$contratacion=filter_input(INPUT_GET,"contratacion");
if (isset($contratacion))
{
    $entrenador->setFechaContratacion($contratacion);
}



$resultado=$entrenador->Update();

echo $resultado;

//header('Location: ../index.php');
?>