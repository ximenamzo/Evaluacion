<?php

abstract class UnitConversionController {

    public $conversion;
    
    public function realizarCalculos(){

        $this->calcularConversion();
        return json_encode(["c"=>$this->conversion]); 

    }
    public  abstract function calcularConversion(); 

}
//------
?>
