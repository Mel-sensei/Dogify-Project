<?php

include "config.php";

$input = file_get_contents("php://input");
$data = json_decode($input, true);
$data = array();

$pet_id = $_GET['id'];

$query = mysqli_query($con, "SELECT * FROM pet_table WHERE  pet_id = '$pet_id' ");

while($row = mysqli_fetch_object($query)){
	$data[] = $row;
}

	echo json_encode($data);
	echo mysqli_error($con);


?>