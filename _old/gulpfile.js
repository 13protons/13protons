var gulp = require('gulp')
  , less = require('gulp-less-sourcemap')
  , path = require('path')
  , minifyCSS = require('gulp-minify-css')
  , imageResize = require('gulp-image-resize')

gulp.task('styles', function() {
  gulp.src(['./styles/styles.less'])
    .pipe(less({
      generateSourceMap: false, 
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(minifyCSS({noAdvanced:true, keepSpecialComments: 0}))
    .pipe(gulp.dest('./styles'));
});

gulp.task('images', function() {
  gulp.src('./img_source/**')
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


  
gulp.task('default', ['styles', 'images'], function(){
  gulp.watch('./styles/styles.less', ['styles']);
  gulp.watch('./img_source/**', ['images']);
});

