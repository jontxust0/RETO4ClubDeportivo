<?php
include_once ("../model/jugadoresModel.php");


session_start();
$id= $_SESSION['id'];
$usuario= new jugadoresModel();
$usuario->setId_usuario($id);
$usuario->setJugadorByUserId(); 

$listaUsuariosJson=$usuario->getThisJsonString();

echo $listaUsuariosJson;




?>