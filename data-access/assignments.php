<?php
	include './db-connect.php';

	if(isset($_GET['get'])) {
		if($_GET['get'] == 'all'){
			echo get_all();
		}
	} else {
		echo 'incorrect request';
	}

	

	function get_all(){
		return get_data("SELECT * FROM `assignments` WHERE 1");		
	}
?>