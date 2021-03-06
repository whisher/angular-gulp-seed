'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');

module.exports = gulp.task('fonts', function () {
  return gulp.src(config.paths.src.fonts)
    .pipe(gulpif(phonegap, gulp.dest(config.paths.dest.phonegap.fonts), gulp.dest(config.paths.dest.build.fonts)));
});
