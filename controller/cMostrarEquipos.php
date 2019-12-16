<?php
include_once '../model/equipoModel.php';

$newEquipo = new equipoModel();
$newEquipo->setList();

echo $newEquipo->getListJsonString();


?>