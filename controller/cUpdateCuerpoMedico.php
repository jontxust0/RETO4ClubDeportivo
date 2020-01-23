<?php

include_once ("../model/cuerpoMedicoModel.php");

$cuerpoMedico=new cuerpoMedicoModel();

$id=filter_input(INPUT_GET,"id");
if (isset($id))
{
    $cuerpoMedico->setId($id);
}
$funcion=filter_input(INPUT_GET,"funcion");
if (isset($funcion))
{
    $cuerpoMedico->setSueldo($funcion);
}

$direccion= filter_input(INPUT_GET,"direccion");
if (isset($direccion))
{
    $cuerpoMedico->setDireccion($direccion);
}


$tlf=filter_input(INPUT_GET,"telefono");
if (isset($tlf))
{
    $cuerpoMedico->setTlf($tlf);
}



$resultado=$cuerpoMedico->Update();

echo $resultado;

//header('Location: ../index.php');
?>