<?php

require_once "UnitConversionController.php";

class LaG_Controller extends UnitConversionController {

    private $litro = 0;

    public function __construct($lt){
        $this->litro = $lt;
    }

    public function calcularConversion(){
        $this->conversion = $this->litro / 3.78541;
    }
}

?>