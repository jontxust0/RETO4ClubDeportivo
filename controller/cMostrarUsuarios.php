<?php
include_once ("../model/UserModel.php");

$usuario= new UserModel();
$usuario->setList(); 

$listaUsuariosJson=$usuario->getListJsonString();

echo $listaUsuariosJson;

unset ($usuario);

?>