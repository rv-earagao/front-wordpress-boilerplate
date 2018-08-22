<?php

/**
 * Register our sidebars and widgetized areas.
 *
 */

add_action( 'widgets_init', function(){
	register_sidebar([
		'name' => __( 'My Widget', 'rv-wp' ),
		'id' => 'my-widget',
		'description' => __( 'Widget Description', 'rv-wp' ),
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget' => '</aside>',
		'before_title' => '<h3 class="widgettitle widget-title">',
		'after_title' => '</h3>',
	]);
});
?>
