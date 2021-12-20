<?php

include "config.php";

$input = file_get_contents("php://input");
$data = json_decode($input, true);
$message = array();
 
$pet_name  =  $data['newname'];
$pet_address  =  $data['pet_address'];
$pet_age  =  $data['pet_age'];
$pet_bio  =  $data['pet_bio'];
$pet_breed  =  $data['pet_breed'];
$pet_gender  =  $data['pet_gender'];
$pet_id  =  $data['pet_id'];
$pet_image  =  $data['pet_image'];
$pet_stats  =  $data['pet_stats'];
$user_id  =  $data['user_'];

	
	
	
	
	
	
	
	
	
	
$query = mysqli_query($con ,"UPDATE pet_table SET 
									user_id		= '$user_id',
									pet_image	= '$pet_image',
									pet_name	= '$pet_name',
									pet_breed	= '$pet_breed',
									pet_age		= '$pet_age',
									pet_gender	= '$pet_gender',
									pet_bio		= '$pet_bio',
									pet_address	= '$pet_address',
									pet_stats	= '$pet_stats'
							WHERE	pet_id 		= '$pet_id' ");

	if($query){
		http_response_code(201);
		$message['status'] = "SUCCESS";
	}else{
		http_response_code(422);
		$message['status'] = "ERROR";
	}


	echo json_encode($message);
	echo mysqli_error($con);

?>








