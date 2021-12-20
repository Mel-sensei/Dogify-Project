<?php

include "config.php";

$input = file_get_contents("php://input");
$data = json_decode($input, true);
$message = array();

$user_id	 = 	$data['user_id'];
$pet_image = $data['image'];
$pet_name = 	$data['pet_name'];	
$pet_breed = $data['breed'];	
$pet_age	 = 	$data['age'];
$bio	 = 	$data['bio'];
$address	 = 	$data['address'];
$pet_gender =$data['gender'];	
$pet_stats = $data['status'];	
  		
$query = "INSERT INTO pet_table (user_id, pet_image, pet_name, pet_breed, pet_age, pet_gender, pet_bio, pet_address,pet_stats) 
		VALUES('$user_id','$pet_image','$pet_name','$pet_breed','$pet_age','$pet_gender','$bio','$address','$pet_stats') ";


	if(mysqli_query($con, $query)){
		http_response_code(201);
		$message['status'] = "SUCCESS";
	}else{
		http_response_code(422);
		$message['status'] = "ERROR";
	}

	echo json_encode($message);
	echo mysqli_error($con);
