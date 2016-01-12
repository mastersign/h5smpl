/* global require */
var fs = require('fs');
var gulp = require('gulp');
var textTransformation = require('gulp-text-simple');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');

var htmlContent = fs.readFileSync('src/html/content.inc.html', 'utf8');

var fillBody = function (html, opts) {
	return html.replace(
		/(<body(\s+[^>]*)?>)[\s\S]*<\/body>/m,
		function (m, c) {
			return c + '\n' + htmlContent + '\n</body>';
		});
}

gulp.task('copy')

gulp.task('prepare-tests', function () {
	return gulp.src('src/html/tests/test.*.html')
		.pipe(textTransformation(fillBody)())
		.pipe(gulp.dest('dist'));
});

gulp.task('compile-css', function () {
	return gulp.src('src/css/*.less')
		.pipe(less())
		.pipe(cssnano())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('copy-images', function () {
	return gulp.src('src/img/*')
		.pipe(gulp.dest('dist/img'));
});

gulp.task('default', ['compile-css', 'copy-images', 'prepare-tests']);
