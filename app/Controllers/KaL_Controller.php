<?php

require_once "UnitConversionController.php";

class KaL_Controller extends UnitConversionController {

    private $kilogramo = 0;

    public function __construct($k){
        $this->kilogramo = $k;
    }

    public function calcularConversion(){
        $this->conversion = $this->kilogramo * 2.20462;
    }
}

?>