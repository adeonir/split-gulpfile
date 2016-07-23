'use strict';

// Uglify & Concat JS
module.exports = function(gulp, plugins, config) {
  return function() {
  gulp.src(config.src.js)
    .pipe(plugins.plumber())
    .pipe(plugins.concat('main.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(config.dist.js));
  };
};
