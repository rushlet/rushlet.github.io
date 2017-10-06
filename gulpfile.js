const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const webpack = require('gulp-webpack');

gulp.task('watch', function () {
    gulp.watch('source/**/*.*', ['default']);
});

gulp.task('html', function(){
		return gulp.src('source/html/**/*.html')
		.pipe(gulp.dest('compiled/html/'));
});

gulp.task('css', function(){
    return gulp.src('source/css/**/*.css')
    .pipe(sass())
    .pipe(gulp.dest('compiled/css/'))
});

gulp.task('js', function(){
		return gulp.src('source/js/**/*.js')
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(gulp.dest('compiled/js'));
});

gulp.task('default', ['html', 'css', 'js']);
