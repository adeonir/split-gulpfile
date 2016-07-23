'use strict';

var paths = {
  src: './src/',
  dist: './dist/'
};

var config = {
  src: {
    js: paths.src + 'js/**/*.js',
    styl: paths.src + 'styl/style.styl',
    img: paths.src + 'img/**/*',
  },
  dist: {
    js: paths.dist + 'js/',
    css: paths.dist + 'css/',
    img: paths.dist + 'img/',
  }
};

module.exports = config;
