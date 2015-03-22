var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
  gulp.src('./scss/emboxcss.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist'));
});
