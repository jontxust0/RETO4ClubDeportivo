<?php

include_once ("../model/userModel.php");

$usuario=new userModel();

$id=filter_input(INPUT_GET,"id");

echo($id);
if (isset($id))
{
    $usuario->setIdUser($id);
}

$resultado=$usuario->delete();
echo $resultado;

//header('Location: ../index.php');
?>