<?php 

include_once "jugadoresModel.php";
include_once "entrenadoresModel.php";
include_once "cuerpoMedicoModel.php";

class equipoModel extends equipoClass{
    private $list = array();
    private $arrJugadores = array();
    private $arrEntrenadores = array();
    private $arrCuerpoMedico = array();
    

    /**
     * @return multitype:
     */
    public function getList()
    {
        return $this->list;
    }

    /**
     * @param multitype: $list
     */
    public function setList($list)
    {
        $this->list = $list;
    }

    /**
     * @return multitype:
     */
    public function getArrJugadores()
    {
        return $this->arrJugadores;
    }

    /**
     * @return mixed
     */
   
    /**
     * @param multitype: $arrJugadores
     */
    public function setArrJugadores($arrJugadores)
    {
        $this->arrJugadores = $arrJugadores;
    }

    /**
     * @param mixed $objEntrenador
     */
  

    public function setList()
    {
        $this->OpenConnect();  // konexio zabaldu  - abrir conexiÃ³n
        
        //$sql = "CALL sp_pelicula_load()"; // SQL sententzia - sentencia SQL
        $sql = "select * from equipos";
        $result = $this->link->query($sql); // result-en ddbb-ari eskatutako informazio dena gordetzen da
        // se guarda en result toda la informaciÃ³n solicitada a la bbdd
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $new=new self();
            
            $new->setId($row['id']);
            $new->setFemenino_masculino($row['femenino/masculino']);
            $new->setNombre($row['nombre']);
            $new->setId_categoria($row['id_categoria']);
            
            //-------------------------lista de jugadores---------------//
            $newJugadores = new jugadoresModel();
            $newJugadores->setId_equipo($new->getId());
            $newJugadores->setListByIdEquipo();
            $new->setArrJugadores($newJugadores->getList());
            //-------------------------añadir entrenador---------------//
            $newEntrenadores = new entrenadoresModel();
            $newEntrenadores->setId_equipo($new->getId());
            $newEntrenadores->setListByIdEquipo();
            $new->setArrEntrenadores($newEntrenadores->getList());
            //-------------------------añadir cuerpo medico---------------//
            $newCuerpo = new cuerpoMedicoModel();
            $newCuerpo->setId_equipo($new->getId());
            $newCuerpo->setListByIdEquipo();
            $new->setArrEntrenadores($newCuerpo->getList());

            
            array_push($this->list, $new);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    /**
     * @return multitype:
     */
    public function getArrEntrenadores()
    {
        return $this->arrEntrenadores;
    }

    /**
     * @param multitype: $arrEntrenadores
     */
    public function setArrEntrenadores($arrEntrenadores)
    {
        $this->arrEntrenadores = $arrEntrenadores;
    }







}





?>