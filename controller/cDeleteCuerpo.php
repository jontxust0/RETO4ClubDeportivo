<?php
include_once ("../model/cuerpoMedicoModel.php");
$id=filter_input(INPUT_GET,"id");
$cuerpoMedico= new cuerpoMedicoModel();




echo($id);
if (isset($id))
{
    $cuerpoMedico->setId($id);
}

$resultado=$cuerpoMedico->deleteCuerpo();
echo $resultado;
