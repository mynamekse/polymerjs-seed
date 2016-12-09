const gulp = require('gulp');// Gulpfile
const gutil = require('gulp-util');
var uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('js', function() {
  gulp.src('scripts/*.js')
  .pipe(uglify())
  .pipe(concat('script.js'))
  .pipe(gulp.dest('assets'))
});

var htmlmin = require('gulp-htmlmin');

gulp.task('minify', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('htmlmini'));
});

gulp.task('copy', function() {
  gulp.src(['bower_components/**/*'])
  .pipe(gulp.dest('public/bower_components'))
});



    watch = require('gulp-watch');
 
gulp.task('watch-folder', function() {  
   return watch('bower_components/**/*', function () {
        gulp.run('copy');
            console.log("DDDDDDDDDDD");
    });
});
 

var sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('styles/main.scss')
  .pipe(sass({style: 'expanded'}))
    .on('error', gutil.log)
  .pipe(gulp.dest('assets'))
});
gulp.task('browser-sync', function() {
     browserSync.init(null, {
          proxy: "http://0.0.0.0:8080",
        files: ["public/*.*"],
        browser: "google chrome",
             server: "./public",
        port: 8081,
     });
         gulp.watch("public/*.html").on('change', browserSync.reload);
});


gulp.task('log', function() {
  gutil.log('== My Log Task ==')
});
var browserSync = require('browser-sync').create();
gulp.task('serve', function() {

    browserSync.init({
        server: "./public",
          port: 8080
    });


    gulp.watch(["public/*.html","./index.html"]).on('change', browserSync.reload);
});
