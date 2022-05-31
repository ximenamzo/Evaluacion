<?php

require_once "UnitConversionController.php";

class CaP_Controller extends UnitConversionController {

    private $centimetro = 0;

    public function __construct($ce){
        $this->centimetro = $ce;
    }

    public function calcularConversion(){
        $this->conversion = $this->centimetro / 2.54;
    }
}

?>