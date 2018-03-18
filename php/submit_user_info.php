<?php
	// Importing DBConfig.php file.
	include 'dbconfig.php';
<<<<<<< HEAD

	// Creating connection.
	$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

	// Getting the received JSON into $json variable.
	$json = file_get_contents('php://input');
	// decoding the received JSON and store into $obj variable.
	$obj = json_decode($json,true);
	// Populate firstName from JSON $obj array and store into $firstName.
	$firstName = $obj['firstName'];
	// Populate lastName from JSON $obj array and store into $lastName.
	$lastName = $obj['lastName'];

	// Populate email from JSON $obj array and store into $email.
	$email = $obj['email'];

	// Populate phone number from JSON $obj array and store into $phoneNumber.
	$phoneNumber = $obj['phoneNumber'];
	// Populate password from JSON $obj array and store into $password.
	$password = $obj['password'];

	// Creating SQL query and insert the record into MySQL database table.
	$Sql_Query = "INSERT INTO User (firstName, lastName, email, phoneNumber, password) VALUES ('$firstName', '$lastName', '$email', '$phoneNumber', '$password')";


	if(mysqli_query($con,$Sql_Query)){
		// If the record inserted successfully then show the message.
		$MSG = 'Data Inserted Successfully into MySQL Database' ;
		// Converting the message into JSON format.
		$json = json_encode($MSG);
		// Echo the message.
		echo $json ;

	}
	else{
		echo 'Try Again';

	}
	mysqli_close($con);
?>
=======
	 
	// Creating connection.
	$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
	 
	// Getting the received JSON into $json variable.
	$json = file_get_contents('php://input');

	// decoding the received JSON and store into $obj variable.
	$obj = json_decode($json,true);

	// Populate firstName from JSON $obj array and store into $firstName.
	$firstName = $obj['firstName'];

	// Populate lastName from JSON $obj array and store into $lastName.
	$lastName = $obj['lastName'];
	 
	// Populate email from JSON $obj array and store into $email.
	$email = $obj['email'];
	 
	// Populate phone number from JSON $obj array and store into $phoneNumber.
	$phoneNumber = $obj['phoneNumber'];

	// Populate password from JSON $obj array and store into $password.
	$password = $obj['password'];
	 
	// Creating SQL query and insert the record into MySQL database table.
	$Sql_Query = "INSERT INTO User (firstName, lastName, email, phoneNumber, password) VALUES ('$firstName', '$lastName', '$email', '$phoneNumber', '$password')";
	 
	 
	if(mysqli_query($con,$Sql_Query)){
		// If the record inserted successfully then show the message.
		$MSG = 'Data Inserted Successfully into MySQL Database' ;

		// Converting the message into JSON format.
		$json = json_encode($MSG);

		// Echo the message.
		echo $json ;
		 
	}
	else{
		echo 'Try Again';
	 
	}
	mysqli_close($con);
?>
>>>>>>> 9dfdb010d659034e1cc8463b48b0a9ef92d97159
