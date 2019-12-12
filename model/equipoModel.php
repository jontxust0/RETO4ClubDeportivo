<?php 

include_once "jugadoresModel.php";
include_once "entrenadoresModel.php";

class equipoModel extends equipoClass{
    private $list = array();
    private $arrJugadores = array();
    private $objEntrenador;
    

    public function setList()
    {
        $this->OpenConnect();  // konexio zabaldu  - abrir conexión
        
        //$sql = "CALL sp_pelicula_load()"; // SQL sententzia - sentencia SQL
        $sql = "select * from equipos";
        $result = $this->link->query($sql); // result-en ddbb-ari eskatutako informazio dena gordetzen da
        // se guarda en result toda la información solicitada a la bbdd
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $new=new self();
            
            $new->setId($row['id']);
            $new->setFemenino_masculino($row['femenino/masculino']);
            $new->setNombre($row['nombre']);
            $new->setId_categoria($row['id_categoria']);
            

            
            array_push($this->list, $new);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }






}





?>