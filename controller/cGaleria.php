<?php
include_once ("../model/galeriaModel.php");
$id_equipo=filter_input(INPUT_GET,"idEquipo");
$galeriaPublico= new galeriaModel();
$galeriaPublico->setId_equipo($id_equipo);
$galeriaPublico->setAllGallery(); 

$listaEntrenadoresJson=$galeriaPublico->getListJsonString();

echo $listaEntrenadoresJson;

unset ($galeriaPublico);

?>