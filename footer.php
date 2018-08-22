	<?php wp_footer(); ?>

	<script type="text/javascript">
		window.thirdParty = {
			env : location.href.match(/localhost/)?'development':'production',
			GTM :'GTM-XXXXXX',
			NEWRELIC :'Nova Relíquia'
		}
	</script>

	<script type="text/javascript" defer src="<?php echo url('build/third-party/bi.js') ?>"></script>
</body>
</html>
