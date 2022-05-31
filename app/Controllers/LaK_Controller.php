<?php

require_once "UnitConversionController.php";

class LaK_Controller extends UnitConversionController {

    private $libra = 0;

    public function __construct($lb){
        $this->libra = $lb;
    }

    public function calcularConversion(){
        $this->conversion = $this->libra / 2.20462;
    }
}

?>