<?php
include_once '../model/categoriaModel.php';
$newCat = new categoriaModel();
$newCat->setList();
echo $newCat->getListJsonString();