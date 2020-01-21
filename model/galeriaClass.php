<?php
class galeriaClass{
    protected $id;
    protected $privado;
    protected $pic;
    protected $id_equipo;


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
    public function getPrivado()
    {
        return $this->privado;
    }

    /**
     * @return mixed
     */
    public function getPic()
    {
        return $this->pic;
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
     * @param mixed $privado
     */
    public function setPrivado($privado)
    {
        $this->privado = $privado;
    }

    /**
     * @param mixed $pic
     */
    public function setPic($pic)
    {
        $this->pic = $pic;
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
