# Wordpress Boilerplate

> A Wordpress Boilerplate Theme

## Stack
- Stylus ( Lost, Rupture )
- Javascript Vanilla ( Jails )
- PHP ( Wordpress with Steroids )

## Instalation
- yarn install

## Development
- yarn start

## Build Production
- yarn build

## Tasks 
- Critical Path
- Minify/Uglify js
- Minify/CleanCss css

## Development Guidelines ( Recomendations )

- Define your entities as `models` in order to reuse them on Pages. Models are objects containing results from `WP_Query`. Models are php Classes, why classes? Only for a organization sake.

- Use `component` function for reusing code, all components have `$props` available when you send an object as parameter. Try to keep them as `Dumb` as possible, just like you do on your `Stateless Component`. Make all services and `wp_queries` requests on `models`.

e.g :
```php
<?php component('mycomponent', [
	'name' => 'Clark Kent'
])?>
```
