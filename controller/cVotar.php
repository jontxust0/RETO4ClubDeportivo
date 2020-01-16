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

for ($i = 0; $i < sizeof($catList); $i++) {
$votos->setId_categorias($catList[$i]->getId());
if ($votos->checkList()==true){
   unset($catList[$i]);
}
    
   $categorias->setListNormal($catList);
  
}

echo $categorias->getListJsonString();

?>