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
    public function setList($list)
    {
        $this->list = $list;
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
            $vars["objUser"]=$this->getObjUser()->getObjectVars();
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