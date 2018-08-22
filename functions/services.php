<?php
	/*
	** @meu_servico
	*  Endpoint : /wp-admin/admin-ajax.php?action=meu_servico&teste=true
	*/

	function meu_servico(){

		$teste = $_GET['teste'];

		//encode into JSON format and output
		echo json_encode([
			status => 200,
			data => [ teste => $teste ]
		]);

		//stop "0" from being output
		die();
	}

	add_action('wp_ajax_se_lookup', 'meu_servico');
	add_action('wp_ajax_nopriv_se_lookup', 'meu_servico');
?>
