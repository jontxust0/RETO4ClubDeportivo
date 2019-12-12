<?php
require_once 'connect_data.php';
require_once 'UserClass.php';

class UserModel extends UserClass{
    
    private $list;

    public function getList()
    {
        return $this->list;
    }

    public function setList($list)
    {
        $this->list = $list;
    }
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
                $this->setAdmin($row['admin']); 
                
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
        $admin=$this->admin;        // all the fields.....
        
        $options=['cost'=>10];
        $encriptedPass=password_hash ($password,PASSWORD_BCRYPT,$options) ;
        
        $sql="call spInsertUser('$username',$admin,'$encriptedPass')";
        $result= $this->link->query($sql);
        
        return $this->link->affected_rows;
        
        $this->CloseConnect();
        
    }  
    
}

