<?php

require_once "UnitConversionController.php";

class CaP_Controller extends UnitConversionController {

    private $centimetro = 0;
    //private $centimetro[11]; //array centimetro(s) [] 
    //private $x = 0; //centimetro inicial

    public function __construct($ce){
        $this->centimetro = $ce;
        //$this->x = $ce;
    }

    public function calcularConversion(){
            $this->conversion = $this->centimetro / 2.54;

        //for( $i = $this->x-5; $i <= $this->x+5; $i++){
        //    if($this->x > 0){
        //        $this->conversion = $this->centimetro[$i] / 2.54;
        //    }
        //}

        //return json_encode($this->conversion);

    }

    //ciclo for
    //despues return
}

?>