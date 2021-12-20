<?php

include "config.php";

$input = file_get_contents("php://input");
$data = json_decode($input, true);
$message = array();
//data
$content = $data['content'];
$reciever  = $data['sender'];
$sender = $data['reciever'];
$fullname = $data['fullname'];
$image = $data['image'];


$status = 'received';
$date = date('Y-m-d');
//password encryption
//$hash = password_hash($password,PASSWORD_DEFAULT);

$stmt = mysqli_query($con, "SELECT * FROM user_table WHERE user_id = '$reciever' ");

while($row = mysqli_fetch_array($stmt)){


			$user_fullname_r = $row['user_fullname'];		
			$user_image_r = $row['user_image'];

      $query = "INSERT INTO message_table (user_image,user_fullname_s,user_image_r,user_fullname_r,sender,receiver,content,message_status,date_recieve) 
							        VALUES('$image','$fullname','$user_image_r','$user_fullname_r','$sender','$reciever','$content','$status','$date') ";

		if(mysqli_query($con, $query)){
			http_response_code(201);
			$message['status'] = "SUCCESS";

		}else{
			http_response_code(422);
			$message['status'] = "ERROR";
		}
}

	
		
	print json_encode($message);
	mysqli_close($con);