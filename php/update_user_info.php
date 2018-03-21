<?php
  include 'dbconfig.php';

  $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

  // Getting the received JSON into $json variable.
	$json = file_get_contents('php://input');

	// decoding the received JSON and store into $obj variable.
	$obj = json_decode($json,true);

  // Get current credentials
  if($obj['email'] != "") {
    $getCredentialsQuery = "SELECT * FROM User WHERE email = '$email'";
    $credentials = mysqli_query($getCredentialsQuery);
    $credentialsRow = mysqli_fetch_array($credentials, MYSQL_ASSOC);

    // Set variable values from the returned row
    $firstName = $credentialsRow['firstName'];
    $lastName = $credentialsRow['lastName'];
    $email = $credentialsRow['email'];
    $phoneNumber = $credentialsRow['phoneNumber'];
    $password = $credentialsRow['password'];

    // Check if a user was found
    if($credentialsRow->num_rows > 0) {
      if($obj['firstName'] != $credentialsRow['firstName']) {
        $firstName = $$obj['firstName'];
      }

      if($obj['lastName'] != $credentialsRow['lastName']) {
        $firstName = $$obj['lastName'];
      }

      if($obj['password'] != $credentialsRow['password']) {
        $firstName = $$obj['password'];
      }

      if($obj['phoneNumber'] != $credentialsRow['phoneNumber']) {
        $firstName = $$obj['phoneNumber'];
      }

      // Update the user information
      $updateUserCredentialsQuery = "UPDATE User SET firstName='$firstName', lastName='$lastName', phoneNumber='$phoneNumber', password='$password' WHERE email='$email'";
      if(mysqli_query($updateUserCredentialsQuery)) {
        echo json_encode("User successfully updated.");
      } else {
        echo json_encode("Unexpected error when updating user.");
      }

    } else {
      echo json_encode("Unexpected Error. User not found in the database.");
    }
  } else {
    echo json_encode("Error. Did not receive a user email.");
  }
?>
