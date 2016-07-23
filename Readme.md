# Splitting a gulpfile into multiple files

Based on: [Splitting a gulpfile into multiple files](http://macr.ae/article/splitting-gulpfile-multiple-files.html)

## Clone and install

`git clone https://github.com/adeonir/split-gulpfile.git your_project`

`npm install`

## Configuration

All your paths and configuration are in the `gulp.config.js`:

```
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
```

## Gulpfile

#### Function

The `gulpfile.js` has a function `getTask` that loads all your tasks who are in the `tasks` folder:

```
function getTask(task) {
  return require('./tasks/' + task)(gulp, plugins, config);
}
```

#### Tasks

Put your news tasks as follows:

```
gulp.task('styles', getTask('styles'));
```
## Enjoy

Write your code on `scr` folder.

Run `gulp` and watch the magic! Your files are compiled to `dist` folder.

