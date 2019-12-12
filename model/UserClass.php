<?php


class UserClass{
    protected $idUser;
    protected $username;
    protected $password;
    protected $name;
    protected $surname;
    protected $email;
    protected $admin;
    protected $pic;
 

    public function getIdUser()
    {
        return $this->idUser;
    }


    public function getUsername()
    {
        return $this->username;
    }

    public function getPassword()
    {
        return $this->password;
    }

    public function getName()
    {
        return $this->name;
    }

    public function getSurname()
    {
        return $this->surname;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function getAdmin()
    {
        return $this->admin;
    }

    public function getPic()
    {
        return $this->pic;
    }

    public function getUrl()
    {
        return $this->url;
    }

    public function setIdUser($idUser)
    {
        $this->idUser = $idUser;
    }

    public function setUsername($username)
    {
        $this->username = $username;
    }

    public function setPassword($password)
    {
        $this->password = $password;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function setSurname($surname)
    {
        $this->surname = $surname;
    }

    public function setEmail($email)
    {
        $this->email = $email;
    }

    public function setAdmin($admin)
    {
        $this->admin = $admin;
    }

    public function setPic($pic)
    {
        $this->pic = $pic;
    }

    public function setUrl($url)
    {
        $this->url = $url;
    }


    
}

