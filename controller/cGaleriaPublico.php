<?php
include_once ("../model/galeriaModel.php");



$galeriaPublico= new galeriaModel();
    
$galeriaPublico->setList(); 

$listaEntrenadoresJson=$galeriaPublico->getListJsonString();

echo $listaEntrenadoresJson;

unset ($galeriaPublico);

?>