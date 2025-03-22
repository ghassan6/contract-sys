<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");


$method = $_SERVER['REQUEST_METHOD'];
switch($method) {


        
    case "GET":
        $data=array('L1'=>'https://www.youtube.com/embed/xqkkmWmpwXY',
        'L2'=>"https://www.youtube.com/embed/ivqdbiQ1Efw",
        'L3'=>"https://www.youtube.com/embed/TAINazqJf14",
        'L4'=>'https://www.youtube.com/embed/ZgwtwH8ICkk');


     
        
        echo json_encode($data);
        break;


}
