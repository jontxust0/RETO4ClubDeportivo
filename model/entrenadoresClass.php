<?php 
class entrenadoresClass{
protected $id;
protected $tlf;
protected $direccion;
protected $sueldo;
protected $fechaContratacion;
protected $id_usuario;
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
    public function getEdad()
    {
        return $this->edad;
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
    public function getTlf()
    {
        return $this->tlf;
    }

/**
     * @return mixed
     */
    public function getDireccion()
    {
        return $this->direccion;
    }

/**
     * @return mixed
     */
    public function getTipo()
    {
        return $this->tipo;
    }

/**
     * @return mixed
     */
    public function getId_equipo()
    {
        return $this->id_equipo;
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
     * @param mixed $edad
     */
    public function setEdad($edad)
    {
        $this->edad = $edad;
    }

/**
     * @param mixed $sexo
     */
    public function setSexo($sexo)
    {
        $this->sexo = $sexo;
    }

/**
     * @param mixed $tlf
     */
    public function setTlf($tlf)
    {
        $this->tlf = $tlf;
    }

/**
     * @param mixed $direccion
     */
    public function setDireccion($direccion)
    {
        $this->direccion = $direccion;
    }

/**
     * @param mixed $tipo
     */
    public function setTipo($tipo)
    {
        $this->tipo = $tipo;
    }

/**
     * @param mixed $id_equipo
     */
    public function setId_equipo($id_equipo)
    {
        $this->id_equipo = $id_equipo;
    }


    public function getObjectVars()
    {
        $vars = get_object_vars($this);
        return  $vars;
    }


}

?>