<?php

include "config.php";

$input = file_get_contents("php://input");
$data = json_decode($input, true);
$message = array();

$sender = 	$data['reciever'];
$reciever = $data['sender'];


	$query = mysqli_query($con, "SELECT * FROM message_table WHERE sender = $sender AND receiver = $reciever ");


			while($row = mysqli_fetch_array($query)){
			
                $mess_id = $row['mess_id'];
                $user_image = $row['user_image'];
                $user_fullname_s = $row['user_fullname_s'];
                $user_image_r = $row['user_image_r'];
                $user_fullname_r = $row['user_fullname_r'];
                $sender = $row['sender'];
                $receiver = $row['receiver'];
                $content = $row['content'];
                $message_status = 'read';
                $date_recieve = $row['date_recieve'];
                

            $stmt = mysqli_query($con ,"UPDATE message_table SET
                                                     user_image     = '$user_image',
                                                    user_fullname_s = '$user_fullname_s',
                                                    user_image_r    = '$user_image_r',
                                                    user_fullname_r = '$user_fullname_r',
                                                    sender           = '$sender',
                                                    receiver        = '$receiver',
                                                    content         = '$content',
                                                    message_status  = '$message_status',
                                                    date_recieve    = '$date_recieve'
                                                     WHERE mess_id   = '$mess_id' ");
            
            }
            
    http_response_code(201);
    $message['status'] = "Success";

	print json_encode($message);
	print mysqli_error($con);

?>