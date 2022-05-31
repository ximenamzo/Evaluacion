<?php

require_once "Controllers/FaC_Controller.php";
require_once "Controllers/CaF_Controller.php";
require_once "Controllers/KaL_Controller.php";
require_once "Controllers/LaK_Controller.php";
require_once "Controllers/LaG_Controller.php";
require_once "Controllers/GaL_Controller.php";
require_once "Controllers/CaP_Controller.php";
require_once "Controllers/PaC_Controller.php";


$fc = in_array('fac',array_keys($_GET));

if($fc){
    $datos = $_POST;

    $fahrenheit  = $datos['f'];

    $fac = new FaC_Controller($fahrenheit);

    $response = $fac -> realizarCalculos();

    echo $response; 

    exit();
}

$cf = in_array('caf',array_keys($_GET));

if($fc){
    $datos = $_POST;

    $celsius  = $datos['c'];

    $caf = new CaF_Controller($celsius);

    $response = $caf -> realizarCalculos();

    echo $response; 

    exit();
}

$kl = in_array('kal',array_keys($_GET));

if($kl){
    $datos = $_POST;

    $kilogramo  = $datos['k'];

    $kal = new KaL_Controller($kilogramo);

    $response = $kal -> realizarCalculos();

    echo $response; 

    exit();
}

$lk = in_array('lak',array_keys($_GET));

if($lk){
    $datos = $_POST;

    $libra  = $datos['lb'];

    $lak = new LaK_Controller($libra);

    $response = $lak -> realizarCalculos();

    echo $response; 

    exit();
}

$lg = in_array('lag',array_keys($_GET));

if($lg){
    $datos = $_POST;

    $litro  = $datos['lt'];

    $lag = new LaG_Controller($litro);

    $response = $lag -> realizarCalculos();

    echo $response; 

    exit();
}

$gl = in_array('gal',array_keys($_GET));

if($gl){
    $datos = $_POST;

    $galon  = $datos['g'];

    $gal = new GaL_Controller($galon);

    $response = $gal -> realizarCalculos();

    echo $response; 

    exit();
}

$cp = in_array('cap',array_keys($_GET));

if($cp){
    $datos = $_POST;

    $centimetro  = $datos['ce'];

    $cap = new CaP_Controller($centimetro);

    $response = $cap -> realizarCalculos();

    echo $response; 

    exit();
}

$pc = in_array('pac',array_keys($_GET));

if($pc){
    $datos = $_POST;

    $pulgada  = $datos['p'];

    $pac = new PaC_Controller($pulgada);

    $response = $pac -> realizarCalculos();

    echo $response; 

    exit();
}

