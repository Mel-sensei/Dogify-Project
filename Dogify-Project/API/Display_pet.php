<?php

include "config.php";

 $user_id = $_GET['user_id'];

$query = mysqli_query($con, "SELECT * FROM pet_table WHERE user_id = $user_id ");


while($row = mysqli_fetch_assoc($query)){
	$data[] = $row;
}


print json_encode($data);
mysqli_close($con);

?>