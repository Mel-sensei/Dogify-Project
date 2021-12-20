<?php

include "config.php";

$input = file_get_contents("php://input");
$data = json_decode($input, true);


$reciever = $data['reciever'];
$sender = $data['sender'];

$query = mysqli_query($con, "SELECT * FROM message_table 
                                    WHERE sender = '$sender' AND receiver = '$reciever'
                                    OR sender = '$reciever' AND receiver = '$sender'
                                    ");

while($row = mysqli_fetch_array($query)){
        $message[] = $row;
}

	echo json_encode($message);
	echo mysqli_error($con);

?>