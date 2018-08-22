<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage Boilerplate
 * @since Boilerplate 1.0
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="theme-color" content="#ffffff">

	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
	<link rel="shortcut icon" async defer href="<?php echo url('build/images/favicon.ico') ?>" type="image/x-icon" />

	<style type="text/css" id="critical-style">
		<?php
			$criticalpath = TEMPLATEPATH . '/critical-path/' . $GLOBALS['page'] . '.php';
			if( file_exists($criticalpath) ):
				include $criticalpath;
			endif;
		?>
	</style>

	<link rel="preload" href="<?php echo url('build/css/'.$GLOBALS['page'].'.css') ?>" as="style" onload="this.onload=null;this.rel='stylesheet'">
	<noscript><link rel="stylesheet" href="<?php echo url('build/css/'.$GLOBALS['page'].'.css') ?>"></noscript>
	<script>!function(n){"use strict";n.loadCSS||(n.loadCSS=function(){});var o=loadCSS.relpreload={};if(o.support=function(){var e;try{e=n.document.createElement("link").relList.supports("preload")}catch(t){e=!1}return function(){return e}}(),o.bindMediaToggle=function(t){var e=t.media||"all";function a(){t.media=e}t.addEventListener?t.addEventListener("load",a):t.attachEvent&&t.attachEvent("onload",a),setTimeout(function(){t.rel="stylesheet",t.media="only x"}),setTimeout(a,3e3)},o.poly=function(){if(!o.support())for(var t=n.document.getElementsByTagName("link"),e=0;e<t.length;e++){var a=t[e];"preload"!==a.rel||"style"!==a.getAttribute("as")||a.getAttribute("data-loadcss")||(a.setAttribute("data-loadcss",!0),o.bindMediaToggle(a))}},!o.support()){o.poly();var t=n.setInterval(o.poly,500);n.addEventListener?n.addEventListener("load",function(){o.poly(),n.clearInterval(t)}):n.attachEvent&&n.attachEvent("onload",function(){o.poly(),n.clearInterval(t)})}"undefined"!=typeof exports?exports.loadCSS=loadCSS:n.loadCSS=loadCSS}("undefined"!=typeof global?global:this);</script>

	<script>
		WebFontConfig = { google: { families: ['Roboto:100,300,400,700,900', 'Roboto+Slab:100,300,400,700'] } };
		(function(d) {
			var wf = d.createElement('script'), s = d.scripts[0];
				wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
				wf.async = true;
			s.parentNode.insertBefore(wf, s);
		})(document);
	</script>

	<script>
		!(function(){
			var request = new XMLHttpRequest();
			request.onload = function(e) {
				var wrapper = document.createElement('div');
				wrapper.id = 'svg-sprite';
				wrapper.innerHTML = request.responseText;
				wrapper.style.display = 'none';
				document.body.insertBefore(wrapper, document.body.childNodes[0]);
			};
			request.open("GET", "<?php echo url('build/images/sprite.svg') ?>", true);
			request.send();
		})();
	</script>

	<script
		type="text/javascript"
		id="application"
		src="<?php echo url('build/js/main.js') ?>"
		data-src="<?php echo url('build/js/'.$GLOBALS['page'].'.js') ?>"
		defer>
	</script>

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
