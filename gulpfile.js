var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	cleanCSS = require('gulp-clean-css'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	watch = require('gulp-watch');


gulp.task('sass', function(){
	return gulp.src('./css/*.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(gulp.dest('./css'));
		console.log('fdsfsd')
})

gulp.task('css-bundle', ['sass'], function(){
	return gulp.src('./css/*.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
            cascade: false
		}))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(concat('./css/bundle.css'))
		.pipe(gulp.dest('static'))
});

gulp.task('js-bundle', function() {
  gulp.src(
  		[
  			'./js/jQuery.js', 
  			'./js/jquery.magnific-popup.min.js', 
  			'./js/slick.min.js',
  			'./js/jquery.goldcarrot.js',
  			'./js/ion.rangeSlider.min.js',
  			'./js/catalog.js',
  			'./js/java.js',
		]
  	)
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./static/js/'))
});

gulp.task('bundle', ['css-bundle', 'js-bundle'] ,function(){
	console.log('make bundle');
});

gulp.task('default', function() {
    gulp.watch('./css/**/*.scss', ['css-bundle']);
    gulp.watch('./js/**/*.js', ['js-bundle']);
});