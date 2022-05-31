<?php

require_once "UnitConversionController.php";

class FaC_Controller extends UnitConversionController {
    
    private $fahrenheit = 0;

    public function __construct($f){
        $this->fahrenheit = $f;
    }

    public function calcularConversion(){
        $this->conversion = ($this->fahrenheit - 32) * (5/9);
    }
}

?>