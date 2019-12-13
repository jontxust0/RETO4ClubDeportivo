<?php
include_once ("../model/UserModel.php");

$user= new UserModel();
$user->setList();

$listaUsers=$user->getList();
$listaUsers=json_encode($listaUsers);
echo ($listaUsers);
unset ($user);

?>