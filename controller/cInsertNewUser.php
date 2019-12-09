<?php
require_once '../model/UserModel.php';

$username=filter_input(INPUT_POST, 'username');
$password=filter_input(INPUT_POST, 'password');
$admin=filter_input(INPUT_POST, 'admin');

$user=new UserModel();
$user->setUsername($username);
$user->setPassword($password);
$user->setAdmin($admin);

$resultado=$user->insertUser();
echo $resultado;
