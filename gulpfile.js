var gulp = require('gulp'),
  config = require('./gulp.config.js'),
  plugins = require('gulp-load-plugins')();

function getTask(task) {
  return require('./tasks/' + task)(gulp, plugins, config);
}

gulp.task('styles', getTask('styles'));
gulp.task('scripts', getTask('scripts'));
gulp.task('images', getTask('images'));

gulp.task('default', ['styles', 'scripts', 'images']);
