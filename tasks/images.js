'use strict';

// Minify Images
module.exports = function(gulp, plugins, config) {
  return function() {
    var options = {
      optimizationLevel: 3,
      progressive: true,
      interlaced: true,
      upscale: false
    };

    gulp.src(config.src.img)
      .pipe(plugins.plumber())
      .pipe(plugins.imagemin(options))
      .pipe(gulp.dest(config.dist.img));
  };
};
