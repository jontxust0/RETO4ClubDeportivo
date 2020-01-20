<?php
session_start();
require_once '../model/votosModel.php';

$idUser = $_SESSION['id'];
$arrCategorias=filter_input(INPUT_GET, "arrCategorias");
$arrJugadores=filter_input(INPUT_GET, "arrJugadores");
$arrCategorias= json_decode($arrCategorias);
$arrJugadores=json_decode($arrJugadores);
$votos = new votosModel();
$votos->setId_usuario($idUser);
for ($i = 0; $i < sizeof($arrCategorias); $i++) {
    $votos->setId_categoria($arrCategorias[$i]);
    $votos->setId_jugadorVotado($arrJugadores[$i]);
    $votos->insertVoto();
}
if (sizeof($arrCategorias)!=0){
    echo "si";
}
else{
    echo "no";
}
    
?>