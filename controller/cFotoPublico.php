<?php
include_once '../model/galeriaModel.php';
$galeria = new galeriaModel();
$galeria ->setList();
echo $galeria ->getListJsonString();
