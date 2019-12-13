<?php 
class jugadoresClass{
protected $id;
protected $direccion;
protected $dorsal;
protected $posicion;
protected $tlf;
protected $altura;
protected $id_datosMedicos;
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
     * @param mixed $id_equipos
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
    public function getDireccion()
    {
        return $this->direccion;
    }

/**
     * @return mixed
     */
    public function getDorsal()
    {
        return $this->dorsal;
    }

/**
     * @return mixed
     */
    public function getPosicion()
    {
        return $this->posicion;
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
    public function getAltura()
    {
        return $this->altura;
    }

/**
     * @return mixed
     */
    public function getId_datosMedicos()
    {
        return $this->id_datosMedicos;
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
     * @param mixed $direccion
     */
    public function setDireccion($direccion)
    {
        $this->direccion = $direccion;
    }

/**
     * @param mixed $dorsal
     */
    public function setDorsal($dorsal)
    {
        $this->dorsal = $dorsal;
    }

/**
     * @param mixed $posicion
     */
    public function setPosicion($posicion)
    {
        $this->posicion = $posicion;
    }

/**
     * @param mixed $tlf
     */
    public function setTlf($tlf)
    {
        $this->tlf = $tlf;
    }

/**
     * @param mixed $altura
     */
    public function setAltura($altura)
    {
        $this->altura = $altura;
    }

/**
     * @param mixed $id_datosMedicos
     */
    public function setId_datosMedicos($id_datosMedicos)
    {
        $this->id_datosMedicos = $id_datosMedicos;
    }

/**
     * @param mixed $id_usuario
     */
    public function setId_usuario($id_usuario)
    {
        $this->id_usuario = $id_usuario;
    }




}

?>