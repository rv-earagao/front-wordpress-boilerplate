<?php
/**
 * For more information on hooks, actions, and filters,
 * {@link https://codex.wordpress.org/Plugin_API}
 *
 * @package WordPress
 * @subpackage Boilerplate
 * @since Boilerplate 1.0
 */
 	require_once 'functions/index.php';

	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );

	show_admin_bar( false );
?>
