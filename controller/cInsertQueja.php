<?php 

include_once ("../model/quejaModel.php");

$newQueja = new quejaModel();

$nombre=filter_input(INPUT_POST,'nombre');
$apellido=filter_input(INPUT_POST,'apellido');
$asunto=filter_input(INPUT_POST,'asunto');
$queja=filter_input(INPUT_POST,'queja');

$newQueja->setNombre($nombre);
$newQueja->setApellido($apellido);
$newQueja->setAsunto($asunto);
$newQueja->setDescripcion($queja);

echo ($newQueja->insert());

?>