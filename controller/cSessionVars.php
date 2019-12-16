<?php
require_once '../model/userModel.php';

$name=filter_input(INPUT_GET, "name");
$password=filter_input(INPUT_GET, "password");


if (( $name !=null ) && ( $password !=null )){
 
    $user=new userModel();
    $user->setUsername($name);
    $user->setPassword($password);


    
    if ($user->findUserByUsername()) // si es correcto el userName y el password
    {
        session_start();
        $_SESSION['name']=$name;
        $_SESSION['password']=$password;      
        $_SESSION['admin']=$user->getAdmin();      
        $_SESSION['email']=$user->getEmail();
        $_SESSION['surname']=$user->getSurname();
        $_SESSION['nombre']=$user->getName();
        $_SESSION['img']=$user->getPic();
        echo 1;
    }  else {
        
        echo 0; // not correct user
    }
}  else {
    
    echo 0;     // not filled user or password
}
