<?php
require_once '../model/userModel.php';
include_once ("../model/jugadoresModel.php");

$name=filter_input(INPUT_GET, "name");
$password=filter_input(INPUT_GET, "password");

$response = array();
if (( $name !=null ) && ( $password !=null )){
 
    $user=new userModel();
    $user->setUsername($name);
    $user->setPassword($password);

    $jugador=new jugadoresModel();
    
    if ($user->findUserByUsername()) // si es correcto el userName y el password
    {
        session_start();
        $_SESSION['name']=$name;
        $_SESSION['password']=$password;    
        $_SESSION['id']=$user->getIdUser();
        $_SESSION['admin']=$user->getAdmin();      
        $_SESSION['email']=$user->getEmail();
        $_SESSION['surname']=$user->getSurname();
        $_SESSION['nombre']=$user->getName();
        $_SESSION['img']=$user->getPic();
        $_SESSION["PHPSESSIONID"]  = session_id();
        
        $response["name"] = $name;
        $response["PHPSESSIONID"]  = session_id();
        $response["err"]  = "Ok";
        echo $response;
    }  else {
        
        echo 0; // not correct user
    }
}  else {
    
    echo 0;     // not filled user or password
}
