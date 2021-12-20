<?php

include "config.php";

$input = file_get_contents("php://input");
$data = json_decode($input, true);
$message = array();

//data
$name = $data['name']; 
$address = 	$data['address'];
$email = 	$data['email'];
$target_file = $data['image'];
$contactNumber = $data['contactNumber']; 
$password = $data['password']; 

//password encryption
//$hash = password_hash($password,PASSWORD_DEFAULT);

	$query = "INSERT INTO user_table (user_fullname,user_image,user_address,user_email,user_cn,password	) 
							 VALUES('$name','$target_file','$address','$email','$contactNumber','$password') ";

		if(mysqli_query($con, $query)){
			http_response_code(201);
			$message['status'] = "SUCCESS";

		}else{
			http_response_code(422);
			$message['status'] = "ERROR";
		}
		
	print json_encode($message);
	mysqli_close($con);