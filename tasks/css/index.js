const path = require('path')
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const sourcemaps = require('gulp-sourcemaps')
const rename = require('gulp-rename')

// CSS
const stylus = require('gulp-stylus')
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const rupture = require('rupture')
const lost = require('lost')
const gcmq = require('gulp-group-css-media-queries')

module.exports = ({srcPath, buildPath, bs, isDev}) => () => {

	return gulp.src([srcPath.styl])
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(stylus({
			use: [rupture()],
			compress: !isDev,
			'include css': true,
			paths:[
				path.resolve(__dirname, '../../node_modules'),
				path.resolve(__dirname, '../../')
			]
		}))
		.pipe(gcmq())
		.pipe(postcss(
			[
				autoprefixer({browsers: ['last 1 version']}),
				lost()
			].concat( isDev? [] : cssnano({zindex: false}) )
		))
		.pipe(sourcemaps.write('./'))
		.pipe(rename((path) => {
			path.basename = path.dirname
			path.dirname = ''
		}))
		.pipe(gulp.dest(buildPath.css))
		.pipe(bs.stream())
}
