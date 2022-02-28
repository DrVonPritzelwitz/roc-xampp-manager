<?php
// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "xpm";

// // Create connection
// $conn = new mysqli($servername, $username, $password, $dbname);
// // Check connection
// if ($conn->connect_error) {
//   die("Connection failed: " . $conn->connect_error);
// }

function get_data($sql) {
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "xpm";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}

	try {
		$result = $conn->query($sql);
		$assignments = '[';
		while($row = $result->fetch_assoc()) {
			$assignments .= json_encode($row, JSON_NUMERIC_CHECK).",";
		}
		return rtrim($assignments, ",")."]";

	} catch (Exception $e) {
		return 'error';
	}

	return $result;
	$conn->close();
}
?>
