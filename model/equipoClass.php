<?php
class equipoClass{
    protected $id;
    protected $femenino_masculino;
    protected $nombre;
    protected $id_categoria;
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
    public function getFemenino_masculino()
    {
        return $this->femenino_masculino;
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
    public function getId_categoria()
    {
        return $this->id_categoria;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @param mixed $femenino_masculino
     */
    public function setFemenino_masculino($femenino_masculino)
    {
        $this->femenino_masculino = $femenino_masculino;
    }

    /**
     * @param mixed $nombre
     */
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    /**
     * @param mixed $id_categoria
     */
    public function setId_categoria($id_categoria)
    {
        $this->id_categoria = $id_categoria;
    }

    function getObjectVars()
    {
        $vars = get_object_vars($this);
        return  $vars;
    }
}