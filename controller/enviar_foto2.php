<?php
header('Access-Control-Allow-Origin: *');
// header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
// header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
// header("Allow: GET, POST, OPTIONS, PUT, DELETE");
// header('Access-Control-Allow-Credentials: false');
// header('Access-Control-Max-Age: 86400');

// date_default_timezone_set('Europe/Madrid');

$V = array_merge($_GET,$_POST);


// ESTABLECER ID DE SESIÓN MANUALMENTE
if($actual_session_id == "" && strlen($V["PHPSESSID"])>0){
    session_id($V["PHPSESSID"]);
}


session_start();

if($_SESSION["user_email"] != ""){
    $filename = "privadas/".$_GET["path"];
    if(file_exists($filename)){
        header("Content-type: image/jpeg");
        readfile($filename);
    }else{
        // header("Content-type: text/html");
        // echo "no existe";
        header("Content-type: image/jpeg");
        readfile("file_not_found.jpg");
    }

}else{
    header("Content-type: image/jpeg");
    readfile("session_expired.jpg");
}

?>