var gulp = require('gulp')
  , less = require('gulp-less-sourcemap')
  , path = require('path')
  , minifyCSS = require('gulp-minify-css')
  , imageResize = require('gulp-image-resize')
  , exec  = require('child_process').exec;

/**
 * Build the Jekyll Site & Serve
 */
exec('jekyll serve -w', function(error, stdout, stderr) {
 console.log('stdout: ' + stdout);
 console.log('stderr: ' + stderr);
 if (error !== null) {
     console.log('exec error: ' + error);
 }
});

gulp.task('styles', function() {
  return gulp.src(['./styles/styles.less'])
    .pipe(less({
      generateSourceMap: false,
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(minifyCSS({noAdvanced:true, keepSpecialComments: 0}))
    .pipe(gulp.dest('./styles'));
});

gulp.task('images', function() {
  return gulp.src('./img_source/**')
      .pipe(imageResize({
        width: 1200,
        format: 'jpg',
        quality: .7
       }))
      .pipe(gulp.dest('./images/full/'));
  gulp.src('./img_source/**')
      .pipe(imageResize({
        width: 300,
        format: 'jpg',
        quality: 1
      }))
      .pipe(gulp.dest('./images/small'));
});


/**
 * Run all tasks needed for a build in defined order
 */

gulp.task('default', ['styles', 'images'], function(){
  gulp.watch('./styles/styles.less', ['styles']);
  gulp.watch('img_source/**', ['images']);
});
