<?php

include "config.php";
$data = array();
 $id = $_GET['id'];

 $query = mysqli_query($con, "SELECT * FROM message_table ");
 while($row = mysqli_fetch_assoc($query)){
	 if($row['sender'] != $id){
				
		$query = mysqli_query($con, "SELECT DISTINCT 
							message_table.user_fullname_r,	
							message_table.user_fullname_s,	
							message_table.user_image,	
							message_table.user_image_r,	
							message_table.sender,	
							message_table.receiver,	
							message_table.message_status,	
							user_table.user_id,
							user_table.user_address,	
							user_table.user_email
					FROM message_table INNER JOIN user_table ON message_table.receiver = user_table.user_id WHERE receiver = $id ORDER BY mess_id desc");


					while($row = mysqli_fetch_assoc($query)){
					if($row['message_status'] == 'read'  ){
							$data[] = $row;
							}
					}
					

					print json_encode($data);
					mysqli_close($con);
	
	 }else{
			
		$query = mysqli_query($con, "SELECT DISTINCT 
						message_table.user_fullname_r,	
						message_table.user_fullname_s,	
						message_table.user_image,	
						message_table.user_image_r,	
						message_table.sender,	
						message_table.receiver,	
						message_table.message_status,	
						user_table.user_id,
						user_table.user_address,	
						user_table.user_email
				FROM message_table INNER JOIN user_table ON message_table.receiver = user_table.user_id WHERE sender = $id ORDER BY mess_id desc");


				while($row = mysqli_fetch_assoc($query)){
				if($row['message_status'] == 'read'  ){
							$data[] = $row;
				}
				}

				print json_encode($data);
				mysqli_close($con);
	 }
 }





?>