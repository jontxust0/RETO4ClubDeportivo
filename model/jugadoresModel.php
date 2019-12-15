<?php 

include_once("connect_data.php");
include_once("userModel.php");
include_once("jugadoresClass.php");

class jugadoresModel extends jugadoresClass{
    private $list = array();
    private $link;
    private $objUser;
    
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
    
    public function getJSONList() {
        return $this->JSONList;
    }
    
    public function setList() {
        $this->OpenConnect();
        $sql = "CALL spMostrarJugadores()";
        $this->list = array();
        $this->JSONList = array();
        $result = $this->link->query($sql);
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            $new = new self();
            $new->setid($row['id']);
            $new->setdireccion($row['direccion']);
            $new->setdorsal($row['dorsal']);
            $new->setposicion($row['posicion']);
            $new->settlf($row['tlf']);
            $new->setaltura($row['altura']);
            $new->setid_datosMedicos($row['id_datosMedicos']);
            $new->setid_usuario($row['id_usuario']);
            array_push($this->list, $new);
            array_push($this->JSONList, $row);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
        // return $this->usuario;
    }
    
    /**
     * @param multitype: $list
     */
    

    public function setListByIdEquipo(){
        $id=$this->getId_equipo();
        $this->OpenConnect();
        $sql="call  spFindJugadorByIdEquipo($id)";
        $result = $this->link->query($sql);
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $new=new self();
            
            $new->setId($row['id']);
            $new->setDireccion($row['direccion']);
            $new->setDorsal($row['dorsal']);
            $new->setPosicion($row['posicion']);
            $new->setTlf($row['tlf']);
            $new->setAltura($row['altura']);
            $new->setId_datosMedicos($row['id_datosMedicos']);
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
}


?>