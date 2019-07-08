const {task, series, parallel, src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

const path = {
  scssFolder: './assets/scss/',
  scssFiles: './assets/scss/**/*.scss',
  scssFile: './assets/scss/style.scss',
  cssFolder: './assets/css/',
  cssFile: './assets/css/style.css',
  htmlFiles: './*.html',
  jsFiles: './assets/js/**/*.js'
};

function scss() {
  return src(path.scssFile).
    pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)).
    pipe(dest(path.cssFolder)).
    pipe(browserSync.reload({stream: true}));
}

function syncInit() {
  browserSync({
    server: {baseDir: './'},
    notify: false
  });
}

async function sync() {
  browserSync.reload();
}

function watchFiles() {
  syncInit();
  watch(path.scssFiles, series(scss));
  watch(path.htmlFiles, sync);
}

task('scss', series(scss));
task('watch', watchFiles);
