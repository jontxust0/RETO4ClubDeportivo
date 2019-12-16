<?php 

include_once "jugadoresModel.php";
include_once "entrenadoresModel.php";
include_once "cuerpoMedicoModel.php";
include_once ('equipoClass.php');
class equipoModel extends equipoClass{
    private $list = array();
    private $arrJugadores;
    private $arrEntrenadores;
    private $arrCuerpoMedico;
    

    /**
     * @return mixed
     */
    public function getArrCuerpoMedico()
    {
        return $this->arrCuerpoMedico;
    }

    /**
     * @param mixed $arrCuerpoMedico
     */
    public function setArrCuerpoMedico($arrCuerpoMedico)
    {
        $this->arrCuerpoMedico = $arrCuerpoMedico;
    }

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
  
    public function OpenConnect() {
        $konDat = new connect_data();
        try {
            $this->link = new mysqli($konDat->host, $konDat->userbbdd, $konDat->passbbdd, $konDat->ddbbname);
            // mysqli klaseko link objetua sortzen da dagokion konexio datuekin
            // se crea un nuevo objeto llamado link de la clase mysqli con los datos de conexiÃ³n.
        } catch (Exception $e) {
            echo $e->getMessage();
        }
        $this->link->set_charset("utf8"); // honek behartu egiten du aplikazio eta
        //                  //databasearen artean UTF -8 erabiltzera datuak trukatzeko
    }
    
    
    public function CloseConnect() {
        mysqli_close($this->link);
    }
    
    public function setList()
    {
        $this->OpenConnect();  // konexio zabaldu  - abrir conexión
        
        //$sql = "CALL sp_pelicula_load()"; // SQL sententzia - sentencia SQL
        $sql = "call spAllEquipos()";
        $result = $this->link->query($sql); // result-en ddbb-ari eskatutako informazio dena gordetzen da
        // se guarda en result toda la información solicitada a la bbdd
        
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
            $new->setArrJugadores($newJugadores);
            //-------------------------a�adir entrenador---------------//
            $newEntrenadores = new entrenadoresModel();
            $newEntrenadores->setId_equipo($new->getId());
            $newEntrenadores->setListByIdEquipo();
            $new->setArrEntrenadores($newEntrenadores);
            //-------------------------a�adir cuerpo medico---------------//
            $newCuerpo = new cuerpoMedicoModel();
            $newCuerpo->setId_equipo($new->getId());
            $newCuerpo->setListByIdEquipo();
            $new->setArrCuerpoMedico($newCuerpo);

            
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
    
    
    
    
    function getListJsonString() {
        
        $arr=array();
        
        foreach ($this->list as $object)
        {
            $vars = $object->getObjectVars();
            
           
                $vars['arrJugadores']=$object->arrJugadores->getObjectVars();
                $vars['arrEntrenadores']=$object->arrEntrenadores->getObjectVars();
                $vars['arrCuerpoMedico']=$object->arrCuerpoMedico->getObjectVars();
    
            array_push($arr, $vars);
        }
        return json_encode($arr);
    }







}





?>