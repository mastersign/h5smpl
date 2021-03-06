/* global require */
var fs = require('fs');
var del = require('del');
var gulp = require('gulp');
var textTransformation = require('gulp-text-simple');
var rename = require('gulp-rename');
var less = require('gulp-less');
var cleancss = require('gulp-clean-css');

var htmlContent = fs.readFileSync('src/html/content.inc.html', 'utf8');

var fillBody = function (html, opts) {
	return html.replace(
		/(<body(\s+[^>]*)?>)[\s\S]*<\/body>/m,
		function (m, c) {
			return c + '\n' + htmlContent + '\n</body>';
		});
};

gulp.task('clear-dist', function () {
	return del(['dist/*']);
});

gulp.task('copy-images', function () {
	return gulp.src('src/img/*')
		.pipe(gulp.dest('dist/img'));
});

gulp.task('copy-html', function () {
	return gulp.src('src/html/template.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('prepare-tests', function () {
	return gulp.src('src/html/tests/test.*.html')
		.pipe(textTransformation(fillBody)())
		.pipe(gulp.dest('dist'));
});

gulp.task('compile-css', function () {
	return gulp.src(['src/css/*.less', '!src/css/vars.less', '!src/css/layout.less'])
		.pipe(less())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('compile-minified-css', function () {
	return gulp.src(['dist/css/style.*.css'])
		.pipe(cleancss())
		.pipe(rename({ extname: '.mini.css' }))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('default', gulp.series(
	'clear-dist',
	gulp.parallel('copy-images', 'copy-html'),
	'prepare-tests',
	'compile-css',
	'compile-minified-css'));
