<?php 

include("connect_data.php");

class entrenadoresModel extends entrenadoresClass{
    
    private $link;
    private $usuario;
    
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
        $sql = "CALL spMostrarEntrenadores()";
        $this->list = array();
        $this->JSONList = array();
        $result = $this->link->query($sql);
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            $new = new self();
            $new->setid($row['id']);
            $new->settlf($row['tlf']);
            $new->setdireccion($row['direccion']);
            $new->setsueldo($row['sueldo']);
            $new->setfechaContratacion($row['fechaContratacion']);
            $new->setid_usuario($row['id_usuario']);
            array_push($this->list, $new);
            array_push($this->JSONList, $row);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
        // return $this->usuario;
    }

}


?>