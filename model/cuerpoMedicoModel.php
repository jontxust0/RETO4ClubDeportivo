<?php 
include_once ('userModel.php');
include_once ('cuerpoMedicoClass.php');
class cuerpoMedicoModel extends cuerpoMedicoClass{
    private $list = array();
    private $link;
    private $objUser;
    
    
    
    
    /**
     * @return mixed
     */
    public function getList()
    {
        return $this->list;
    }

    /**
     * @param mixed $list
     */
    public function setList()
    {
        $this->OpenConnect();

        $sql="call  spAllCuerpoMedico()";
        $result= $this->link->query($sql);
        
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            $new = new self();
            $new->setId($row['id']);
            $new->setFuncion($row['funcion']);
            $new->setDireccion($row['direccion']);
            $new->setTlf($row['tlf']);
            $new->setId_equipo($row['id_equipo']);
            $new->setId_usuario($row['id_usuario']);
            $newUser = new userModel();
            $newUser->setIdUser($new->getId_usuario());
            $newUser->findUserByIdUser();
            $new->setObjUser($newUser);
            
            array_push($this->list, $new);
            
        }
        
        mysqli_free_result($result);
        $this->CloseConnect();
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
    
    public function setListByIdEquipo()
    {
        $this->OpenConnect();
        
        $id=$this->getId_equipo();
        
        $sql="call spFindCuerpoByIdEquipo($id)";
        $result= $this->link->query($sql);
        
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            $new = new self();
            $new->setId($row['id']);
            $new->setFuncion($row['funcion']);
            $new->setDireccion($row['direccion']);
            $new->setTlf($row['tlf']);
            $new->setId_equipo($row['id_equipo']);
            $new->setId_usuario($row['id_usuario']);
            $newUser = new userModel();
            $newUser->setIdUser($new->getId_usuario());
            $newUser->findUserByIdUser();
            $new->setObjUser($newUser);
            
            array_push($this->list, $new);
            
        }
        
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    public function setCuerpoMedicoByUserId()
    {
        $this->OpenConnect();
        
        $id=$this->id_usuario;
        
        $sql="call spFindCuerpoMedicoByIdUser($id)";
        $result= $this->link->query($sql);
        
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $this->setId($row['id']);
            $this->setFuncion($row['funcion']);
            $this->setDireccion($row['direccion']);
            $this->setTlf($row['tlf']);
            $this->setId_equipo($row['id_equipo']);
            $this->setId_usuario($row['id_usuario']);
            $newUser = new userModel();
            $newUser->setIdUser($this->getId_usuario());
            $newUser->findUserByIdUser();
            $this->setObjUser($newUser);
            
           
            
        }
        
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    public function setCuerpoMedicoById()
    {
        $this->OpenConnect();
        
        $id=$this->getId();
        
        $sql="call spFindCuerpoById($id)";
        $result= $this->link->query($sql);
        
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $this->setId($row['id']);
            $this->setFuncion($row['funcion']);
            $this->setDireccion($row['direccion']);
            $this->setTlf($row['tlf']);
            $this->setId_equipo($row['id_equipo']);
            $this->setId_usuario($row['id_usuario']);
            $newUser = new userModel();
            $newUser->setIdUser($this->getId_usuario());
            $newUser->findUserByIdUser();
            $this->setObjUser($newUser);
            
            
            
        }
        
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    public function checkCuerpo(){
        $idUser=$this->getId_usuario();
        
        $this->OpenConnect();
        
        //$sql = "CALL sp_find_user('$name','$password')";
        $sql = "call spCheckCuerpoMedico($idUser)";
        
        $result = $this->link->query($sql);
        
        if ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            return true;
            
        } else{
            return false;
        }
        $this->CloseConnect();
    }
    
    public function insertCuerpo(){
        $this->OpenConnect();
        
        $direccion=$this->getDireccion();
        $funcion=$this->getFuncion();
        $tlf=$this->getTlf();
        $idUsuario=$this->getId_usuario();
        $idEquipo=$this->getId_equipo();// all the fields.....
        
        
        $sql="call spInsertNewCuerpoMedico ('$funcion','$direccion','$tlf','$idUsuario','$idEquipo')";
        $result= $this->link->query($sql);
        
        return $this->link->affected_rows;
        
        $this->CloseConnect();
    }
    public function deleteCuerpo(){
        $this->OpenConnect();
        $id = $this->getId();
        
        $sql="call spDeleteCuerpo($id)";
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
        
        $id=$this->getId();
        $funcion=$this->getFuncion();
        $direccion=$this->getDireccion();
        $tlf=$this->getTlf();

        

        
        $sql="CALL spUpdateCuerpoMedico($id,'$funcion','$direccion','$tlf')";
      
        $numFilas=$this->link->query($sql);
        
        if ($numFilas>=1){
            return "cambiado";
        } else {
            return "Error al cambiar".$sql.print_r($numFilas,true);
        }
        
        $this->CloseConnect();
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