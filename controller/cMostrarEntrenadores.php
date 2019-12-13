<?php //

require_once("../model/entrenadoresClass.php");
require_once("../model/entrenadoresModel.php");
$cont=new entrenadoresModel();
$cont->setList();
$datos=$cont->getJSONList();

$entrenadores=json_encode($datos);
echo($entrenadores);
?>