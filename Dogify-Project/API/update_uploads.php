<?php

include "config.php";
$input = file_get_contents("php://input");
$data = json_decode($input, true);
$message = array();

    $user_id = $data['user_id'];
    $image = $data['filename'];


    $query = mysqli_query($con, "SELECT * FROM user_table WHERE user_id = $user_id");

    while($row = mysqli_fetch_object($query)){

    	$id =       $row->user_id;
        $name =     $row->name; 
        $image = 	$image;
        $address = 	$row->address; 
        $email = 	$row->email; 
        $fb_acc = 	$row->fb_acc;
        $other_sm =	$row->other_sm; 
        $username = $row->username; 
        $password = $row->password; 

        $stmt = mysqli_query($con ,"UPDATE user_table SET 
                                            name    ='$name',
                                            image   ='$image',
                                            address ='$address',
                                            email   ='$email',
                                            fb_acc  ='$fb_acc',
                                            other_sm='$other_sm',
                                            username='$username',
                                            password='$password'  WHERE user_id = '$id' LIMIT 1");

            
    print json_encode($row);
	mysqli_close($con);
    }

   