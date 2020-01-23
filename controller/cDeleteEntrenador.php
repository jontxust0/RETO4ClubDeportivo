<?php
include_once ("../model/entrenadoresModel.php");

$entrenador=new entrenadoresModel();

$id=filter_input(INPUT_GET,"id");

echo($id);
if (isset($id))
{
    $entrenador->setId($id);
}

$resultado=$entrenador->delete();
echo $resultado;

//header('Location: ../index.php');
?>