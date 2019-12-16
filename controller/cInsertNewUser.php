<?php
require_once '../model/UserModel.php';

$username=filter_input(INPUT_POST, 'username');
$password=filter_input(INPUT_POST, 'password');
$name=filter_input(INPUT_POST, 'name');
$surname=filter_input(INPUT_POST, 'surname');
$email=filter_input(INPUT_POST, 'email');
$admin=filter_input(INPUT_POST, 'admin');

$user=new UserModel();
$user->setUsername($username);
$user->setPassword($password);
$user->setName($name);
$user->setSurname($surname);
$user->setEmail($email);
$user->setAdmin($admin);




$resultado=$user->insertUser();
echo $resultado;
