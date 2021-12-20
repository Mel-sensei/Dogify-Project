<?php

include "config.php";

$input = file_get_contents("php://input");
$data = json_decode($input, true);
$message = array();

$password = 	$data['password'];
$user_address = 	$data['user_address'];
$user_cn = 	$data['user_cn'];
$user_fullname = 	$data['user_fullname'];
$user_id =	$data['user_id'];
$user_image = $data['user_image']; 
$user_email = $data['user_email']; 


$query = mysqli_query($con ,"UPDATE user_table SET
                                            user_fullname    ='$user_fullname',
                                            user_image   ='$user_image',
                                            user_email   ='$user_email',
                                            user_address  ='$user_address',
                                            user_cn='$user_cn',
                                            password='$password'  
                                            WHERE user_id = '$user_id' ");






	if($query){
		$stmt = mysqli_query($con, "SELECT * FROM user_table WHERE user_id = '$user_id' ");

			while($row = mysqli_fetch_array($stmt)){
				$data[] = $row;
			}

		http_response_code(201);
		$message['status'] = "Success";
	}else{
		http_response_code(422);
		$message['status'] = "Error";
	}


	print json_encode($data);
	print mysqli_error($con);

?>