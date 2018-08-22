<?php

	function url( $url ){
		$url = get_template_directory_uri() . '/' . $url;
		return $url;
	}

	function getcontent( $type, $name, $props = null ){
		$hasslash = preg_match('/\//', $name);
		$filename = $hasslash? $name . '.php' : $name . '/index.php';
		include TEMPLATEPATH . '/'.$type.'/' . $filename;
		unset( $props );
	}

	function component( $name, $data = null ){
		getcontent('components', $name, $data);
	}

	function debug( $var ){
		$var = json_encode( $var );
		echo "<script>console.log($var)</script>";
	}

	//  New formats of thumbnaills
	if ( function_exists( 'add_image_size' ) ) {
		add_image_size( 'thumb-64x64', 64, 64, true );
		add_image_size( 'thumb-92x116', 92, 116, true );
		add_image_size( 'thumb-296x168', 296, 168, true );
	}

	//  Register nav menus
	register_nav_menus( array(
		'primary' => __( 'Navegação Principal', 'rv-wp' )
	// Add new menus here
	));

	//  Change default search form tags, comments form,
	//  and comments to HTML5 tags
	add_theme_support(
		'html5',
		array(
		  'search-form',
		  'comment-form',
		  'comment-list',
		  'gallery',
		  'caption'
		)
	);

	// Get last version deploy pantheon
	function get_last_version_deploy() {
		$files = glob('.git/refs/tags/*');

		$filterLive = array_filter($files, function($var){
			return strpos($var, 'live');
		});

		$version = end($filterLive);

		if( $version ) {
			$split = explode("_", $version);
			$last = end($split);
		} else {
			$last = '';
		}

		return $last;
	}

	add_action('get_last_version_deploy', 'get_last_version_deploy');
?>
