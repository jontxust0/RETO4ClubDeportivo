<?php 

require_once 'connect_data.php';
require_once 'entrenadoresClass.php';

class entrenadoresModel extends entrenadoresClass{
    private $link;
    private $list= array();
    
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
    
   
    public function setList()
    {
        $this->OpenConnect(); // Abrir la conexion
        
        $sql= "call spAllEntrenadores()";
        
        $result = $this->link->query($sql); //Almacena los datos recibidos de la llamada a la base de datos
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $entrenador= new entrenadoresClass();
            
            $entrenador->setId($row['id']);
            $entrenador->setTlf($row['tlf']);
            $entrenador->setDireccion($row['direccion']);
            $entrenador->setSueldo($row['sueldo']);
            $entrenador->setFechaContratacion($row['fechaContratacion']);
            
            array_push($this->list, $entrenador);
        }
        mysqli_free_result($result);
        unset($entrenador);
        $this->CloseConnect();  //Cerrar la conexion
    }
    public function setByIdEquipo(int $id)
    {
        $this->OpenConnect();
        
       
        
        $sql="call  spFindEntrenadorByIdEquipo('$id)";
        $result= $this->link->query($sql);
        
        
        if ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            $this->setId($row['id']);
            $this->setTlf($row['tlf']);
            $this->setDireccion($row['direccion']);
            $this->setSueldo($row['sueldo']);
            $this->setFechaContratacion($row['fechaContratacion']);
            $this->setId_usuario($row['id_usuario']);
            $this->setId_equipo($row['id_equipo']);
            
            
        }
       
        mysqli_free_result($result);
        $this->CloseConnect();
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