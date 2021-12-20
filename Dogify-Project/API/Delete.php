<?php

session_start();

include "config.php";

$data = array();
$input = file_get_contents("php://input");
$pet_id = $_GET['pet_id'];

$query = mysqli_query($con, "DELETE FROM pet_table WHERE pet_id = $pet_id ");

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