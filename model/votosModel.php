<?php
include_once ('votosClass.php');
class votosModel extends votosClass{
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
        
        $sql= "call spAllVotos()";
        
        $result = $this->link->query($sql); //Almacena los datos recibidos de la llamada a la base de datos
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $voto= new votosClass();
            
            $voto->setId($row['id']);
            $voto->setId_usuario($row['id_usuario']);
            $voto->setId_categorias($row['id_categoria']);
            $voto->setId_jugadorVotado($row['id_jugadorVotado']);
            
            
            
            array_push($this->list, $voto);
        }
        mysqli_free_result($result);
        unset($voto);
        $this->CloseConnect();  //Cerrar la conexion
    }
    public function checkList(){
        $idUser=$this->getId_usuario();
        $idCat=$this->getId_categorias();
        
        $this->OpenConnect();
        
        //$sql = "CALL sp_find_user('$name','$password')";
        $sql = "call spCheckVote($idUser, $idCat)";
        
        $result = $this->link->query($sql);
        
        if ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
           return true;
            
        } else{
            return false;
        }
    }
    
}



?>
