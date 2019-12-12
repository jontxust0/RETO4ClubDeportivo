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
    public function getSueldo()
    {
        return $this->sueldo;
    }

/**
     * @return mixed
     */
    public function getFechaContratacion()
    {
        return $this->fechaContratacion;
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
     * @param mixed $sueldo
     */
    public function setSueldo($sueldo)
    {
        $this->sueldo = $sueldo;
    }

/**
     * @param mixed $fechaContratacion
     */
    public function setFechaContratacion($fechaContratacion)
    {
        $this->fechaContratacion = $fechaContratacion;
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