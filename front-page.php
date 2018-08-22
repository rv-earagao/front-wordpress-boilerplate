<?php
	require_once 'models/hello-world.php';

	$GLOBALS['page'] = 'home';
	$data =  $HelloWorld->getData();

	get_header();
?>

<section class="site" data-component="home">

	<article class="content">
		<?php component('hello-world', $data); ?>
	</article>

</section>

<?php get_footer(); ?>
