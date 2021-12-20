<?php

include "config.php";

$input = file_get_contents("php://input");
$data = json_decode($input, true);
$message = array();

$username = $data['email']; 
$ahhhh = $data['password']; 


    $check_user = mysqli_query($con,"SELECT * from user_table WHERE user_email='$username' AND password = '$ahhhh'");
    
    $row = $check_user->fetch_assoc();

        //decrypting password 
        // $hash = $row['password'];
       
        // if(password_verify($ahhhh,$hash);){
             http_response_code(201);
            $message['status'] = "Success";

        // }else{
        //      http_response_code(422);
        //     $message['status'] = "Error";
        // }
       
  
    
    print json_encode($row);
    mysqli_close($con);
