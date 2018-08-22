<?php

	class HelloWorld {

		function __construct(){}

		public function getData(){
            return [
				'title' => 'Hello World',
				'subtitle' => 'Wordpress Boilerplate 2.0',
				'image' => [
					'url' => '//upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg',
					'alt'   => 'Wordpress Logo'
				]
			];
		}
	}

	$HelloWorld = new HelloWorld();
?>
