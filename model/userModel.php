<?php
require_once 'connect_data.php';
include_once "jugadoresModel.php";
include_once "entrenadoresModel.php";
include_once "cuerpoMedicoModel.php";
require_once 'userClass.php';

class userModel extends userClass{
    
    private $link;
    private $list= array();

    

    public function getList()
    {
        return $this->list;
    }

    
    /**
     * @param multitype: $list
     */
 

    ////////////////////////////////////////////////
    public function OpenConnect()
    {
        $konDat=new connect_data();
        try
        {
            $this->link=new mysqli($konDat->host,$konDat->userbbdd,$konDat->passbbdd,$konDat->ddbbname);
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
    
    ////////////////////////////////////////////////
    
    public function setList()
    {
        $this->OpenConnect(); // Abrir la conexion
        
        $sql= "call spAllUsers()";
        
        $result = $this->link->query($sql); //Almacena los datos recibidos de la llamada a la base de datos
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $user= new userClass();
            
            $user->setIdUser($row['idUser']);
            $user->setUsername($row['username']);
            $user->setPassword($row['password']);
            $user->setName($row['name']);
            $user->setSurname($row['surname']);
            $user->setEmail($row['email']);

            
            array_push($this->list, $user);
        }
        mysqli_free_result($result);
        unset($user);
        $this->CloseConnect();  //Cerrar la conexion
    }
    
    public function findUserByUsername()
    {
        $this->OpenConnect();
        
        $username=$this->username;
        //echo $username;
        $sql="call spFindUserByUsername('$username')";
        $result= $this->link->query($sql);

        $userExists=false;
        
        if ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {

            $passwordEncripted=$row['password'];
            
            if (password_verify($this->getPassword(), $passwordEncripted))
            {
                $this->setIdUser($row['idUser']);
                $this->setAdmin($row['admin']); 
                $this->setEmail($row['email']);
                $this->setSurname($row['surname']);
                $this->setName($row['name']);
                $this->setPic($row['pic']);
                $userExists=true;
            }
        }
        return $userExists;
        mysqli_free_result($result);
        $this->CloseConnect();
    }
  
 public function insertUser()
    {
        $this->OpenConnect();
        
        $username=$this->username;
        $password=$this->password;
        $name=$this->name;
        $surname=$this->surname;
        $admin=$this->admin;  
        $email=$this->email;// all the fields.....
        
        $options=['cost'=>10];
        $encriptedPass=password_hash ($password,PASSWORD_BCRYPT,$options) ;
        
        $sql="call spInsertUser('$username','$admin','$encriptedPass','$name','$surname','$email')";
        $result= $this->link->query($sql);
        
        return $this->link->affected_rows;
        
        $this->CloseConnect();
        
    }
    
    public function delete(){

        $this->OpenConnect();  // konexio zabaldu  - abrir conexión
        
        $id=$this->getIdUser();
        
        $sql="CALL spDeleteUser($id)";
        
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
        
        $idUpdate=$this->getIdUser();
        $nombreUpdate=$this->getUsername();
        $contraseniaUpdate=$this->getPassword();
        $nickNameUpdate=$this->getName();
        $residenciaUpdate=$this->getSurname();
        $emailUpdate=$this->getEmail();
        
        
        $sql="CALL spUpdateUser('$idUpdate','$nombreUpdate','$contraseniaUpdate','$nickNameUpdate','$residenciaUpdate','$emailUpdate')";
        
        $numFilas=$this->link->query($sql);
        
        if ($numFilas>=1){
            return "cambiado";
        } else {
            return "Error al cambiar".$sql.print_r($numFilas,true);
        }
        
        $this->CloseConnect();
    }
    public function UpdateFoto(){
        
        $this->OpenConnect();  // konexio zabaldu  - abrir conexión
        
        $idUpdate=$this->getIdUser();
        $filename=$this->getPic();
       

        
        
        $sql="CALL spUpdateFoto('$idUpdate','$filename')";
        
        $numFilas=$this->link->query($sql);
        
        if ($numFilas>=1){
            return "cambiado";
        } else {
            return "Error al cambiar";
        }
        
        $this->CloseConnect();
    }

    
    public function findUserByIdUser(){
        
        
        $id=$this->getIdUser();
            $this->OpenConnect();
            
            
            
            $sql="call spFindUserById($id)";
            $result= $this->link->query($sql);
            
        
            if ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
            {
                
                $this->setUsername($row['username']);
                $this->setPassword($row['password']);
                $this->setName($row['name']);
                $this->setSurname($row['surname']);
                $this->setEmail($row['email']);
                $this->setAdmin($row['admin']);
                $this->setPic($row['pic']);
                
                
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

