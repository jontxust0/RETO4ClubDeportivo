<?php
include_once '../model/jugadoresModel.php';
$newJugador =new jugadoresModel();
$idCat=filter_input(INPUT_GET,"idCat");
$newJugador->setRankingList($idCat);
echo $newJugador->getListJsonString();