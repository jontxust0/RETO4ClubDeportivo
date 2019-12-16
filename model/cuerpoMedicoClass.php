<?php 
class cuerpoMedicoClass{
protected $id;
protected $funcion;
protected $direccion;
protected $tlf;
protected $id_usuario;
protected $id_equipo;
/**
     * @return mixed
     */
    public function getId_equipo()
    {
        return $this->id_equipo;
    }

/**
     * @param mixed $id_equipo
     */
    public function setId_equipo($id_equipo)
    {
        $this->id_equipo = $id_equipo;
    }

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
    public function getFuncion()
    {
        return $this->funcion;
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
    public function getTlf()
    {
        return $this->tlf;
    }

/**
     * @return mixed
     */
    public function getId_usuario()
    {
        return $this->id_usuario;
    }

/**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

/**
     * @param mixed $funcion
     */
    public function setFuncion($funcion)
    {
        $this->funcion = $funcion;
    }

/**
     * @param mixed $direccion
     */
    public function setDireccion($direccion)
    {
        $this->direccion = $direccion;
    }

/**
     * @param mixed $tlf
     */
    public function setTlf($tlf)
    {
        $this->tlf = $tlf;
    }

/**
     * @param mixed $id_usuario
     */
    public function setId_usuario($id_usuario)
    {
        $this->id_usuario = $id_usuario;
    }


    public function getObjectVars()
    {
        $vars = get_object_vars($this);
        return  $vars;
    }


}

?>