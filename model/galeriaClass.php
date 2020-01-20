<?php
class galeriaClass{
    protected $id;
    protected $privado;
    protected $pic;
    protected $id_equipo;

   
    
    public function getObjectVars()
    {
        $vars = get_object_vars($this);
        return  $vars;
    }
    
    
    
}

?>
