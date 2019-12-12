<?php 

class categoriaClass{
    protected $id;
    protected $nombre;
    protected $cuota;
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
    public function getCuota()
    {
        return $this->cuota;
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
     * @param mixed $cuota
     */
    public function setCuota($cuota)
    {
        $this->cuota = $cuota;
    }

    
    
    public function getObjectVars()
    {
        $vars = get_object_vars($this);
        return  $vars;
    }
}

?>