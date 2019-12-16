<?php 

<<<<<<< HEAD
require_once 'connect_data.php';
require_once 'entrenadoresClass.php';

class entrenadoresModel extends entrenadoresClass{
=======
include_once("connect_data.php");
include_once ('userModel.php');
include_once ('entrenadoresClass.php');

class entrenadoresModel extends entrenadoresClass{
    private $list = array();
>>>>>>> 1d4cb4d3752df60fc6d3cceddbb4a7072d3a2be6
    private $link;
    private $list= array();
    
    /**
     * @param multitype: $list
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
    
    /**
     * @return mixed
     */
    public function getObjUser()
    {
        return $this->objUser;
    }

    /**
     * @param mixed $objUser
     */
    public function setObjUser($objUser)
    {
        $this->objUser = $objUser;
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
<<<<<<< HEAD
            
            $entrenador= new entrenadoresClass();
            
            $entrenador->setId($row['id']);
            $entrenador->setTlf($row['tlf']);
            $entrenador->setDireccion($row['direccion']);
            $entrenador->setSueldo($row['sueldo']);
            $entrenador->setFechaContratacion($row['fechaContratacion']);
            
            array_push($this->list, $entrenador);
=======
            $new = new self();
            $new->setid($row['id']);
            $new->settlf($row['tlf']);
            $new->setdireccion($row['direccion']);
            $new->setsueldo($row['sueldo']);
            $new->setfechaContratacion($row['fechaContratacion']);
            $new->setid_usuario($row['id_usuario']);
            array_push($this->list, $new);
          
>>>>>>> 1d4cb4d3752df60fc6d3cceddbb4a7072d3a2be6
        }
        mysqli_free_result($result);
        unset($entrenador);
        $this->CloseConnect();  //Cerrar la conexion
    }
    public function setListByIdEquipo()
    {
        $this->OpenConnect();
        
       $id=$this->getId_equipo();
        
        $sql="call spFindEntrenadorByIdEquipo($id)";
        $result= $this->link->query($sql);
        
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $new=new self();
            
            $new->setId($row['id']);
            $new->setTlf($row['tlf']);
            $new->setDireccion($row['direccion']);
            $new->setSueldo($row['sueldo']);
            $new->setFechaContratacion($row['fechaContratacion']);
            $new->setId_usuario($row['id_usuario']);
            $new->setId_equipo($row['id_equipo']);
            $newUser = new userModel();
            $newUser->setIdUser($new->getId_usuario());
            $newUser->findUserByIdUser();
            $new->setObjUser($newUser);
            array_push($this->list, $new);
            
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