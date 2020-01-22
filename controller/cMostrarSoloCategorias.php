<?php
include_once '../model/categoriaModel.php';
$newCat = new categoriaModel();
$newCat->setCategoryList();
echo $newCat->getCategoryListJsonString();



?>