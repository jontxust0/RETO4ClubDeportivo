<?php 
include_once ('fotosEquipoClass.php');
class fotosEquipoModel extends fotosEquipoClass{
    private $list = array();
    private $link;
    
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
    
}



?>