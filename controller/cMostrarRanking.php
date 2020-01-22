<?php
include_once '../model/jugadoresModel.php';
$newEntrenador =new jugadoresModel();
$idCat=filter_input(INPUT_GET,"idCat");
$newEntrenador->setRankingList($idCat);
echo $newEntrenador->getListJsonString();