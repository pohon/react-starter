const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pump = require('pump');
const debug = require('gulp-debug');

/**
 * Optimize src/images/
 */
gulp.task('images:optimise', () => {
  pump([
    gulp.src('./src/images/**/*'),
    imagemin(),
    gulp.dest('./src/images'),
    debug({ title: 'Optimise Image' })
  ]);
});

