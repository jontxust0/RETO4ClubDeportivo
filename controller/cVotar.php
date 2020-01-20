<?php
session_start();
include_once ('../model/votosModel.php');
include_once ('../model/categoriaModel.php');
$idUser= $_SESSION['id'];
$categorias= new categoriaModel();
$categorias->setList();


$catList=$categorias->getList();
$votos=new votosModel();
$votos->setId_usuario($idUser);

$resultList=array();
for ($i = 0; $i < sizeof($catList); $i++) {
$votos->setId_categoria($catList[$i]->getId());

if ($votos->checkList()==true){
 
}
else if(sizeof($catList[$i]->getArrEquipos())==0){
    
}
else{
  
    
    $resultList[]=$catList[$i];
}
    
  
  
}

$categorias->setListNormal($resultList);

echo $categorias->getListJsonString();

?>