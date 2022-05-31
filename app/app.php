<?php

require_once "Controllers/FaC_Controller.php"; 

$fc = in_array('fac',array_keys($_GET));

if($fc){
    $datos = $_POST;

    $fahrenheit  = $datos['f'];

    $fac = new FaC_Controller($fahrenheit);

    $response = $fac -> realizarCalculos();

    echo $response; 

    exit();
}

