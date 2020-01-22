<?php 

include_once("connect_data.php");
include_once ('userModel.php');
include_once ('entrenadoresClass.php');

class entrenadoresModel extends entrenadoresClass{
    private $list = array();
    private $link;
    private $objUser;
    
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
            $new = new self();
            $new->setid($row['id']);
            $new->settlf($row['tlf']);
            $new->setdireccion($row['direccion']);
            $new->setsueldo($row['sueldo']);
            $new->setfechaContratacion($row['fechaContratacion']);
            $new->setid_usuario($row['id_usuario']);
            
            $newUser = new userModel();
            $newUser->setIdUser($new->getId_usuario());
            $newUser->findUserByIdUser();
            $new->setObjUser($newUser);
            array_push($this->list, $new);
            
          
        }
        mysqli_free_result($result);
        unset($new);
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
    
    
    public function setEntrenadorByUserId()
    {
        $this->OpenConnect();
        
        $id=$this->id_usuario;
        
        $sql="call spFindEntrenadorByIdUser($id)";
        $result= $this->link->query($sql);
        
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
    
            
            $this->setId($row['id']);
            $this->setTlf($row['tlf']);
            $this->setDireccion($row['direccion']);
            $this->setSueldo($row['sueldo']);
            $this->setFechaContratacion($row['fechaContratacion']);
            $this->setId_usuario($row['id_usuario']);
            $this->setId_equipo($row['id_equipo']);
            $newUser = new userModel();
            $newUser->setIdUser($this->getId_usuario());
            $newUser->findUserByIdUser();
            $this->setObjUser($newUser);
            
            
        }
        
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    public function setEntrenadorById(){
        $id=$this->getId();
        $this->OpenConnect();
        $sql="call  spFindEntrenadorById($id)";
        $result = $this->link->query($sql);
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            
            $this->setId($row['id']);
            $this->setTlf($row['tlf']);
            $this->setDireccion($row['direccion']);
            $this->setSueldo($row['sueldo']);
            $this->setFechaContratacion($row['fechaContratacion']);
            $this->setId_usuario($row['id_usuario']);
            $this->setId_equipo($row['id_equipo']);
            $newUser = new userModel();
            $newUser->setIdUser($this->getId_usuario());
            $newUser->findUserByIdUser();
            $this->setObjUser($newUser);
            
        }
        mysqli_free_result($result);
        $this->CloseConnect();
        
    }
    
    public function insertEntrenador()
    {
        $this->OpenConnect();
        
        $tlf=$this->tlf;
        $direccion=$this->direccion;
        $sueldo=$this->sueldo;
        $fechaContratacion=$this->fechaContratacion;
        $id_usuario=$this->id_usuario;
        $id_equipo=$this->id_equipo;
        
        
        
        $sql="call spInsertNewEntrenador('$tlf','$direccion','$sueldo','$fechaContratacion','$id_usuario','$id_equipo')";
        $result= $this->link->query($sql);
        
        return $this->link->affected_rows;
        
        $this->CloseConnect();
        
    }
    
    
    public function delete(){
        
        $this->OpenConnect();  // konexio zabaldu  - abrir conexión
        
        $id=$this->getId();
        
        $sql="CALL spDeleteEntrenador($id)";
        
        $numFilas=$this->link->query($sql);
        
        if ($numFilas>=1)
        {
            echo "borrado";
        } else {
            echo "Error al borrar";
        }
        $this->CloseConnect();
        
    }
    
    public function Update(){
        
        $this->OpenConnect();  // konexio zabaldu  - abrir conexión
        
        $idUpdate=$this->getId();
        $tlfUpdate=$this->getTlf();
        $direccionUpdate=$this->getDireccion();
        $sueldoUpdate=$this->getSueldo();
        $contratacionUpdate=$this->getFechaContratacion();
      
        
        
        $sql="CALL spUpdateEntrenador('$idUpdate','$tlfUpdate','$direccionUpdate','$sueldoUpdate','$contratacionUpdate')";
        
        $numFilas=$this->link->query($sql);
        
        if ($numFilas>=1){
            return "cambiado";
        } else {
            return "Error al cambiar".$sql.print_r($numFilas,true);
        }
        
        $this->CloseConnect();
    }
    
    function getListJsonString() {
        $arr=array();
        
        foreach ($this->list as $object)
        {
            $vars = get_object_vars($object);
            $vars["objUser"]=$object->getObjUser()->getObjectVars();
            array_push($arr, $vars);
        }
        return json_encode($arr);
    }
    
    
    function getThisJsonString() {
        
        $vars = get_object_vars($this);
        $vars["objUser"]=$this->getObjUser()->getObjectVars();
        return json_encode($vars);
    }

}


?>