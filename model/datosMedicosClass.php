<?php 
class datosMedicosClass{
protected $id;
protected $lesiones;
protected $tipoSangre;
protected $enfermedades;
protected $id_jugador;
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
    public function getLesiones()
    {
        return $this->lesiones;
    }

/**
     * @return mixed
     */
    public function getTipoSangre()
    {
        return $this->tipoSangre;
    }

/**
     * @return mixed
     */
    public function getEnfermedades()
    {
        return $this->enfermedades;
    }

/**
     * @return mixed
     */
    public function getId_jugador()
    {
        return $this->id_jugador;
    }

/**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

/**
     * @param mixed $lesiones
     */
    public function setLesiones($lesiones)
    {
        $this->lesiones = $lesiones;
    }

/**
     * @param mixed $tipoSangre
     */
    public function setTipoSangre($tipoSangre)
    {
        $this->tipoSangre = $tipoSangre;
    }

/**
     * @param mixed $enfermedades
     */
    public function setEnfermedades($enfermedades)
    {
        $this->enfermedades = $enfermedades;
    }

/**
     * @param mixed $id_jugador
     */
    public function setId_jugador($id_jugador)
    {
        $this->id_jugador = $id_jugador;
    }


    public function getObjectVars()
    {
        $vars = get_object_vars($this);
        return  $vars;
    }

}

?>