<?php

include_once ("../model/UserModel.php");

$usuario=new UserModel();

$id=filter_input(INPUT_GET,"id");
if (isset($id))
{
    $usuario->setIdUser($id);
}

$username=filter_input(INPUT_GET,"username");
if (isset($username))
{
    $usuario->setUsername($username);
}
$contrasenia= filter_input(INPUT_GET,"contrasenia");
if (isset($contrasenia))
{
    $usuario->setPassword($contrasenia);
}
$name=filter_input(INPUT_GET,"name");
if (isset($name))
{
    $usuario->setName($name);
}
$surname=filter_input(INPUT_GET,"surname");
if (isset($surname))
{
    $usuario->setSurname($surname);
}

$email=filter_input(INPUT_GET,"email");
if (isset($email))
{
    $usuario->setEmail($email);
}

$resultado=$usuario->Update();

echo $resultado;

//header('Location: ../index.php');
?>