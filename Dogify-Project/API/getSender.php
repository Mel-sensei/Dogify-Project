<?php

include "config.php";

$input = file_get_contents("php://input");
$data = json_decode($input, true);


$id = $_GET['id'];

$query = mysqli_query($con, "SELECT * FROM message_table WHERE receiver = $id LIMIT 1");

while($row = mysqli_fetch_array($query)){
        $message[] = $row;
}

	echo json_encode($message);
	echo mysqli_error($con);

?>