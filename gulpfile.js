var gulp = require('gulp')
  , less = require('gulp-less-sourcemap')
  , path = require('path')
  , minifyCSS = require('gulp-minify-css')

gulp.task('styles', function() {
  gulp.src(['./styles/styles.less'])
    .pipe(less({
      generateSourceMap: false, 
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(minifyCSS({noAdvanced:true, keepSpecialComments: 0}))
    .pipe(gulp.dest('./styles'));
});
  
gulp.task('default', ['styles'], function(){
  gulp.watch('./styles/styles.less', ['styles']);
});

