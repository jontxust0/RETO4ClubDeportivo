<?php 
include_once 'equipoModel.php';
include_once 'categoriaClass.php';
class categoriaModel extends categoriaClass{
    private $list = array();
    private $arrEquipos = array();
    /**
     * @param multitype: $arrEquipos
     */
    public function setArrEquipos($arrEquipos)
    {
        $this->arrEquipos = $arrEquipos;
    }

    /**
     * @return multitype:
     */
    public function setListNormal($list)
    {
        $this->list = $list;
    }
    public function getArrEquipos()
    {
        return $this->arrEquipos;
    }

    /**
     * @param multitype: $arrEquipos
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

    
    public function setList(){
        $this->OpenConnect();
 
        $id = $this->getId();
        $sql="call spAllCategorias($id)";
        $result= $this->link->query($sql);
        
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $new=new self();
            
            $new->setId($row["id"]);
            $new->setNombre($row["nombre"]);
            $new->setCuota($row["cuota"]);
            $newEquipos = new equipoModel();
            $newEquipos->setId_categoria($new->getId());
            $newEquipos->setListByIdCategoria();
            $new->setArrEquipos($newEquipos->getList());
            array_push($this->list, $new);
            
        }
        
        mysqli_free_result($result);
        $this->CloseConnect();
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
   

    function getListJsonString() {
        $arr=array();
        
        foreach ($this->list as $categoria)
        {
            $vars = $categoria->getObjectVars();
            $arrEquipos=array();
            foreach ($categoria->getArrEquipos() as $equipo)
            {
                //linea diferente de ejemplo
                $varsEquipo = $equipo->getObjectVars();
                
                $arrJugadores=array();
                foreach ($equipo->getArrJugadores() as $jugador)
                {
                    //linea diferente de ejemplo
                    $varsJugadores = $jugador->getObjectVars();
                    $varsJugadores["objUser"] = $jugador->getObjUser()->getObjectVars();
                    array_push($arrJugadores, $varsJugadores);
                    
                }
                
                
                $arrEntrenadores=array();
                foreach ($equipo->getArrEntrenadores() as $entrenador)
                {
                    //linea diferente de ejemplo
                    $varsEntrenadores = $entrenador->getObjectVars();
                    $varsEntrenadores["objUser"] = $entrenador->getObjUser()->getObjectVars();
                    array_push($arrEntrenadores, $varsEntrenadores);
                    
                }
                
                $arrCuerpo=array();
                foreach ($equipo->getArrCuerpoMedico() as $cuerpo)
                {
                    //linea diferente de ejemplo
                    $varsCuerpo = $cuerpo->getObjectVars();
                    $varsCuerpo["objUser"] = $cuerpo->getObjUser()->getObjectVars();
                    array_push($arrCuerpo, $varsCuerpo);
                    
                }
                
                $varsEquipo['listJugadores']=$arrJugadores;
                $varsEquipo['listEntrenadores']=$arrEntrenadores;
                $varsEquipo['listCuerpo']=$arrCuerpo;
                
                
            
                
                array_push($arrEquipos, $varsEquipo);  
                
            }
            $vars['listEquipos']=$arrEquipos;
            array_push($arr, $vars);
        
    }
    
    
    return json_encode($arr);
    
    }
}
?>