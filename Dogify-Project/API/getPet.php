<?php

include "config.php";

$data = array();

$user_id = $_GET['id'];

$query = mysqli_query($con, "SELECT * FROM pet_table WHERE user_id = '$user_id' ");

while($row = mysqli_fetch_object($query)){
	$data[] = $row;
}

	echo json_encode($data);
	echo mysqli_error($con);

?>