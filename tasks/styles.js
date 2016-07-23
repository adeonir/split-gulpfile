'use strict';

// Compile Stylus
module.exports = function(gulp, plugins, config) {
  var options = {
    compress: false
  };

  return function() {
  gulp.src(config.src.styl)
    .pipe(plugins.plumber())
    .pipe(plugins.stylus(options))
    .pipe(gulp.dest(config.dist.css));
  };
};
