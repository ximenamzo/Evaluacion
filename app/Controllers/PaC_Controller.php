<?php

require_once "UnitConversionController.php";

class PaC_Controller extends UnitConversionController {

    private $pulgada = 0;

    public function __construct($p){
        $this->pulgada = $p;
    }

    public function calcularConversion(){
        $this->conversion = $this->pulgada * 2.54;
    }
}

?>