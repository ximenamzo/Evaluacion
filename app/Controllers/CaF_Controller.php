<?php

require_once "UnitConversionController.php";

class CaF_Controller extends UnitConversionController {
    
    private $celsius = 0;

    public function __construct($c){
        $this->celsius = $c;
    }

    public function calcularConversion(){
        $this->conversion = ($this->celsius * 1.8) + (32);
    }
}

?>