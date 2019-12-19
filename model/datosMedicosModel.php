<?php

require_once 'connect_data.php';
require_once 'datosMedicosClass.php';
require_once 'userModel.php';



class datosMedicosModel extends datosMedicosClass{
    private $list = array();
    private $link;

    
    /**
     * @return mixed
     */
   
    
    function getList() {
        return $this->list;
    }
    
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
    
    public function findDatosMedicosByIdJugador(){
        
        
        $id=$this->getId();
        $this->OpenConnect();
        
        
        
        $sql="call spFindDatosMedicosById($id)";
        $result= $this->link->query($sql);
        
        
        if ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            $this->setLesiones($row['lesiones']);
            $this->setTipoSangre($row['tipoSangre']);
            $this->setEnfermedades($row['enfermedades']);
   
        }
        
        mysqli_free_result($result);
        $this->CloseConnect();
        
        
    }
    
    
    
    
    
    
  
    
    function getThisJsonString() {
        
        $vars = get_object_vars($this);
       
       
        return json_encode($vars);
    }
}


?>