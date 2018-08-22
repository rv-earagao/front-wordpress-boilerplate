const gulp 	  = require('gulp')
const plumber = require('gulp-plumber')
const webpackStream = require('webpack-stream')
const webpack = require('webpack')
const config  = require('./webpack.config')

module.exports = ( {srcPath, buildPath, isDev} ) => () => {
	
	return gulp.src(srcPath.js)
		.pipe(plumber())
		.pipe(webpackStream( {config} ))
		.pipe(gulp.dest(buildPath.js))
}
