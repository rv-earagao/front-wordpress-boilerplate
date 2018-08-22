const gulp = require('gulp')
const svgstore = require('gulp-svgstore')
const cheerio = require('gulp-cheerio')
const svgmin = require('gulp-svgmin')
const gulpif  = require('gulp-if')

module.exports = ( {srcPath, buildPath, isDev} ) => () => {

	return gulp.src( srcPath.icons )
		.pipe(gulpif(!isDev, svgmin()))
		.pipe(svgstore({ fileName: 'icons.svg', inlineSvg: true }))
		// .pipe(cheerio({
		// 	run: ($, file) => {
		// 		$('svg').addClass('hide')
		// 	},
		// 	parserOptions: { xmlMode: true }
		// }))
		.pipe(gulp.dest(buildPath.icons))
}
