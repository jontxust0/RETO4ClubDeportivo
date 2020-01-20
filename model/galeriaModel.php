<?php
require_once 'connect_data.php';
include_once ('galeriaClass.php');
class galeriaModel extends galeriaClass{
    private $list = array();
    private $link;
    
    /**
     * @param multitype: $list
     */
    

    public function getList()
    {
        return $this->list;
    }
    
    /**
     * @param mixed $list
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
        $this->OpenConnect(); // Abrir la conexion
        
        $sql= "call spAllPublicFotosEquipo()";
        
        $result = $this->link->query($sql); //Almacena los datos recibidos de la llamada a la base de datos
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $galeria= new galeriaClass();
            
            $galeria->setId($row['id']);
            $galeria->setPrivado($row['privado']);
            $galeria->setPic($row['pic']);
            $galeria->setId_equipo($row['id_equipo']);
            
            
            
            array_push($this->list, $galeria);
        }
        mysqli_free_result($result);
        unset($galeria);
        $this->CloseConnect();  //Cerrar la conexion
    }
    
    public function setAllGallery()
    {
        $this->OpenConnect(); // Abrir la conexion
        $id_equipo=$this->id_equipo;
        $sql= "call spAllFotosPrivados($id_equipo)";
        
        $result = $this->link->query($sql); //Almacena los datos recibidos de la llamada a la base de datos
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $galeria= new galeriaClass();
            
            $galeria->setId($row['id']);
            $galeria->setPrivado($row['privado']);
            $galeria->setPic($row['pic']);
            $galeria->setId_equipo($row['id_equipo']);
            
            
            
            array_push($this->list, $galeria);
        }
        mysqli_free_result($result);
        unset($galeria);
        $this->CloseConnect();  //Cerrar la conexion
    }
   
    function getListJsonString() {
        $arr=array();
        
        foreach ($this->list as $object)
        {
            $vars = get_object_vars($object);
            
            array_push($arr, $vars);
        }
        return json_encode($arr);
    }
    
}



?>
