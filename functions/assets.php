<?php
	add_action( 'wp_enqueue_scripts', function() {
		wp_deregister_script('jquery');
		wp_deregister_script('wp-embed');
	});

	add_action( 'wp_enqueue_style', function() {});

	wp_dequeue_script( 'wp-embed' );

	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
	remove_action( 'admin_print_styles', 'print_emoji_styles' );

	add_action( 'admin_enqueue_scripts', function($hook){
		if ( 'widgets.php' != $hook )
	        return;
	    wp_enqueue_script( 'my_custom_script', get_template_directory_uri() . '/js/admin.js',  array('jquery'), '1.0.0', true );
	});

?>
