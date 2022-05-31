<?php

require_once "UnitConversionController.php";

class KaL_Controller extends UnitConversionController {

    private $kilogramo = 0;

    public function __construct($kilo){
        $this->kilogramo = $kilo;
    }

    public function calcularConversion(){
        $this->conversion = $this->kilo * 2.205;
    }

}

?>