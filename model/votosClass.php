<?php
class votosClass{
    protected $id;
    protected $id_usuario;
    protected $id_categoria;
    protected $id_jugadorVotado;
    /**
     * @return mixed
     */
   
    
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
    public function getId_usuario()
    {
        return $this->id_usuario;
    }

    /**
     * @return mixed
     */
    public function getId_categoria()
    {
        return $this->id_categoria;
    }

    /**
     * @return mixed
     */
    public function getId_jugadorVotado()
    {
        return $this->id_jugadorVotado;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @param mixed $id_usuario
     */
    public function setId_usuario($id_usuario)
    {
        $this->id_usuario = $id_usuario;
    }

    /**
     * @param mixed $id_categorias
     */
    public function setId_categoria($id_categoria)
    {
        $this->id_categoria = $id_categoria;
    }

    /**
     * @param mixed $id_jugadorVotado
     */
    public function setId_jugadorVotado($id_jugadorVotado)
    {
        $this->id_jugadorVotado = $id_jugadorVotado;
    }

    public function getObjectVars()
    {
        $vars = get_object_vars($this);
        return  $vars;
    }
    
}
