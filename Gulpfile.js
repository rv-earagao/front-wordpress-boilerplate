/* Base
 * ######################################### */
const gulp = require('gulp')

/* General
 * ######################################### */
const bs = require('browser-sync').create()
const root = __dirname
const environment = process.env.NODE_ENV
const DEV = environment !== 'production'

console.log('Environment => ', environment)

/* Config
 * ######################################### */
const config = {

	bs,
	root,
	environment,
	isDev :DEV,

	srcPath : {
		html: `${root}/**/*.php`,
		htmlWatch: `${root}/**/*.php`,
		css: `${root}/**/*.styl`,
		styl: `${root}/apps/**/*.styl`,
		js: `${root}/js/**/*.js`,
		img: `${root}/images/**/*.{jpeg,jpg,gif,png}`,
		svg: `${root}/images/*.svg`,
		icons: `${root}/images/sprite/*`,
		jsWatch : `${root}/**/*.js`,
		ignore: `${root}/!{build,build/**}`
	},

	buildPath : {
		html: `${root}/build`,
		css: `${root}/build/css`,
		js: `${root}/build`,
		img: `${root}/build/images`,
		icons: `${root}/build/images/`,
		root: `${root}/build/**/*`
	}
}

/* HTML Task
 * ######################################### */
gulp.task('html', () => bs.reload())


/* CSS Task
 * ######################################## */
const css = require('./tasks/css')( config )
gulp.task('css', css)


/* JS Task
 * ###################################### */
const js = require('./tasks/js')( config )
gulp.task('js', js)


/* Images Task
 * ######################################### */
const kraken = require('./tasks/kraken')( config )
gulp.task('kraken', kraken)

/* Icons Task
 * ######################################### */
const icons = require('./tasks/svg/icons')( config )
gulp.task('icons', icons)

/* SVG Task
 * ######################################### */
const svg = require('./tasks/svg')( config )
gulp.task('svg', svg)

/* Critical Path Task
 * ######################################### */
const critical = require('./tasks/critical-path')( config )
gulp.task('critical', ['css'], critical)

/* BrowserSync Task
 * ######################################### */
gulp.task('sync', ['css', 'js'], function() {

	bs.init({
		proxy: 'https://wordpressboilerplate.lndo.site',
		snippetOptions :{
			rule :{
				match: /<\/head>/i,
				fn( snippet, match ){ return snippet + match }
			}
		}
	})
})

/* Watch Task
 * ######################################### */
gulp.task('watch', function() {
	gulp.watch([`${root}/**/*.php`], { debounceDelay: 50 }, ['html'])
	gulp.watch([`${root}/components/**/*.styl`, `${root}/apps/**/*.styl`, `${root}/styl/**/*.styl`], ['css'])
	gulp.watch([`${root}/components/**/*.js`, `${root}/apps/**/*.js`, `${root}/js/**/*.js`], ['js'])
	gulp.watch([`${root}/images/**/*.{jpg,gif,png}`], ['kraken'])
	gulp.watch([`${root}/images/sprite/**/*.{svg}`], ['icons'])
	gulp.watch([`${root}/images/**/*.{svg}`], ['svg'])
})

/* Build Task
 * ######################################### */
gulp.task('build', [
	'css',
	'js',
	'kraken',
	'svg',
	'icons'
].concat( !DEV? ['critical']:['watch', 'sync']) )

gulp.task('test-build', [
	'css',
	'js',
	'kraken',
	'svg',
	'icons',
	'html'
].concat( ['critical', 'watch', 'sync'] ) )


/* Default Task
 * ######################################### */
gulp.task('default', ['build'])
