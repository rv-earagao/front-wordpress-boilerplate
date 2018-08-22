<?php
	class API {

		public static function get( $url, $callback ){
            API::register( $url, $callback );
        }

        public static function post( $url, $callback ){
            API::register( $url, $callback, 'POST' );
        }

        private static function register( $url, $callback, $method = 'GET', $namespace = 'v1' ){
			register_rest_route( $namespace, $url, [
				'methods' => $method,
				'callback' => $callback
            ]);
		}
	}
?>
