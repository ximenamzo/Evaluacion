<?php

require_once "UnitConversionController.php";

class GaL_Controller extends UnitConversionController {

    private $galon = 0;

    public function __construct($g){
        $this->galon = $g;
    }

    public function calcularConversion(){
        $this->conversion = $this->galon * 3.78541;
    }
}

?>