/* global require */
var fs = require('fs');
var del = require('del');
var gulp = require('gulp');
var textTransformation = require('gulp-text-simple');
var rename = require('gulp-rename');
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

gulp.task('clear-dist', function () {
	return del(['dist/*']);
});

gulp.task('copy-images', ['clear-dist'], function () {
	return gulp.src('src/img/*')
		.pipe(gulp.dest('dist/img'));
});

gulp.task('prepare-tests', ['clear-dist'], function () {
	return gulp.src('src/html/tests/test.*.html')
		.pipe(textTransformation(fillBody)())
		.pipe(gulp.dest('dist'));
});

gulp.task('compile-css', ['clear-dist'], function () {
	return gulp.src(['src/css/*.less', '!src/css/vars.less', '!src/css/layout.less'])
		.pipe(less())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('compile-minified-css', ['compile-css'], function () {
	return gulp.src(['dist/css/style.*.css'])
		.pipe(cssnano())
		.pipe(rename({ extname: '.mini.css' }))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['copy-images', 'prepare-tests', 'compile-minified-css']);
