<?php 

include_once 'quejaClass.php';
include_once 'connect_data.php';
class quejaModel extends quejaClass{
    
    public function OpenConnect()
    {
        $konDat=new connect_data();
        try
        {
            $this->link=new mysqli($konDat->host,$konDat->userbbdd,$konDat->passbbdd,$konDat->ddbbname);
            // mysqli klaseko link objetua sortzen da dagokion konexio datuekin
            // se crea un nuevo objeto llamado link de la clase mysqli con los datos de conexión.
        }
        catch(Exception $e)
        {
            echo $e->getMessage();
        }
        $this->link->set_charset("utf8"); // honek behartu egiten du aplikazio eta
        //                  //databasearen artean UTF -8 erabiltzera datuak trukatzeko
    } 
    
    public function CloseConnect()
    {
        mysqli_close ($this->link);
    }
    
    function insert(){
        $this->OpenConnect();
        
        $nombre=$this->getNombre();
        $apellido=$this->getApellido();
        $asunto=$this->getAsunto();
        $descripcion=$this->getDescripcion();
        
        $sql = "INSERT INTO `quejas`(`nombre`, `apellido`, `asunto`, `descripcion`) VALUES ('$nombre','$apellido','$asunto','$descripcion')";
        
        if ($this->link->query($sql)>=1) // insert egiten da
        {
            return "El usuario se ha insertado con exito";
        } else {
            return "Fallï¿½ al insertar el usuario: (" . $this->link->errno . ") " . $this->link->error;
        }
        
        $this->CloseConnect();
    }
}
?>