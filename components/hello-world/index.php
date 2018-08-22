<?php

?>
<div class="hello-world" data-component="hello-world">

	<img
		data-src="<?=$props['image']['url']?>"
		alt="<?=$props['image']['alt']?>"
	/>

	<h2 class="hello-world__title"><?= $props['title'] ?></h2>
	<h3 class="hello-world__subtitle"><?= $props['subtitle'] ?></h3>

	<ul>
		<li><a target="_blank" href="https://docs.devwithlando.io/config/security.html">HTTPS & Lando!</a></li>
		<li><a target="_blank" href="https://developer.wordpress.org/themes/basics/template-hierarchy/">Template Hierarchy</a></li>
		<li><a target="_blank" href="https://developer.wordpress.org/themes/basics/template-files/">Basics : Template Files</a></li>
		<li><a  target="_blank" href="https://www.youtube.com/watch?v=oTRZYnYQlmo">Video : Template from Scratch 101</a></li>
	</ul>
</div>
