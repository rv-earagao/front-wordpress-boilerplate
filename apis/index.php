<?php

	// API URL: /wp-json/v1/{endpoint}

	require_once 'class.php';
	require_once TEMPLATEPATH . '/models/hello-world.php';

	API::get('/hello-world', function() use( $HelloWorld ){
		return $HelloWorld->getData();
	});
?>
