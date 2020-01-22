<?php
include_once '../model/equipoModel.php';

$newEquipo = new equipoModel();
$newEquipo->setTeamList();

echo $newEquipo->getEquipoListJsonString();