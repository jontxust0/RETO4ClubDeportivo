<?php
include_once ("../model/userModel.php");

$usuario= new userModel();
$usuario->setList(); 

$listaUsuariosJson=$usuario->getListJsonString();

echo $listaUsuariosJson;



?>