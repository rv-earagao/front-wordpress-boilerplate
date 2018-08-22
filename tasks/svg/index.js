const svgmin = require('gulp-svgmin')
const gulp = require('gulp')
const gulpif  = require('gulp-if')

module.exports = ({srcPath, buildPath, isDev}) => () => {
	return gulp.src(srcPath.svg)
		.pipe(gulpif(!isDev, svgmin()))
		.pipe(svgmin())
		.pipe(gulp.dest(buildPath.img))
}
