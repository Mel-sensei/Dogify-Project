<?php

include "config.php";  

$input = file_get_contents("php://input");
$data = json_decode($input, true);
$message = array();


// upload image to api folder
    $target_dir = "Uploads/";
    $temp = explode(".", $_FILES["file"]["name"]);
    $newfilename = round(microtime(true)) . '.' . end($temp);

if(move_uploaded_file($_FILES["file"]["tmp_name"],$target_dir. $newfilename)){
    
    http_response_code(201);
    $response = $newfilename;
    $message['name'] = 'Success';
}else{
    http_response_code(422);
    $message['status'] = "Error";
}

    print json_encode($response);
    mysqli_close($con);
   