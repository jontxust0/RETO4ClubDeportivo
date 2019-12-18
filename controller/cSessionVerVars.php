<?php
include_once ("../model/userModel.php");
session_start();

if (isset($_SESSION['name'])) {
   

    
    $obj['id']=$_SESSION['id'];
    $obj['name']=$_SESSION['name'];
    $obj['admin']=$_SESSION['admin'];
    $obj['password']=$_SESSION['password'];
    $obj['email']=$_SESSION['email'];
    $obj['surname']=$_SESSION['surname'];
    $obj['nombre']=$_SESSION['nombre'];
    $obj['img']=$_SESSION['img'];
    
    
    $objJson= json_encode($obj);
    
    
    
    echo $objJson;         // ver var session
    
} else{
    
    echo 0;
}
    
   
