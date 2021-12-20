<?php
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Credentials: true');
	header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTION');
	header('Access-Control-Allow-Headers: token, Content-Type');
	header('Access-Control-Max-Age: 1728000');
	header('Content-Lenght: 0');
	header('Content-Type: application/json');

	$con = mysqli_connect("localhost","root","","dogify_db") or die("Connot Connect to DB");