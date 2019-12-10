<?php 
class usuarioClass{
protected $id;
protected $nombre;
protected $apellido;
protected $sexo;
protected $id_equipo;
protected $contrasena;
protected $usuario;




   

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

/**
     * @return mixed
     */
    public function getNombre()
    {
        return $this->nombre;
    }

/**
     * @return mixed
     */
    public function getApellido()
    {
        return $this->apellido;
    }

/**
     * @return mixed
     */
    public function getSexo()
    {
        return $this->sexo;
    }

/**
     * @return mixed
     */
    public function getId_equipo()
    {
        return $this->id_equipo;
    }

/**
     * @return mixed
     */
    public function getContrasena()
    {
        return $this->contrasena;
    }

/**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

/**
     * @param mixed $nombre
     */
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

/**
     * @param mixed $apellido
     */
    public function setApellido($apellido)
    {
        $this->apellido = $apellido;
    }

/**
     * @param mixed $sexo
     */
    public function setSexo($sexo)
    {
        $this->sexo = $sexo;
    }

/**
     * @param mixed $id_equipo
     */
    public function setId_equipo($id_equipo)
    {
        $this->id_equipo = $id_equipo;
    }

/**
     * @param mixed $contrasena
     */
    public function setContrasena($contrasena)
    {
        $this->contrasena = $contrasena;
    }
    
    /**
     * @return mixed
     */
    public function getUsuario()
    {
        return $this->usuario;
    }
    
    /**
     * @param mixed $usuario
     */
    public function setUsuario($usuario)
    {
        $this->usuario = $usuario;
    }
    

    public function getObjectVars()
    {
        $vars = get_object_vars($this);
        return  $vars;
    }


}

?>