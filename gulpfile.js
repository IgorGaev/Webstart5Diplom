const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const jsmin = require('gulp-jsmin');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminPngquant = require('imagemin-pngquant');

/* CSS  */
gulp.task('minify-css', () => {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
});


/* Сожми и перенеси js файлы */
gulp.task('minify-js', () => {
  return gulp.src(['src/js/*.js', '!src/js/*.min.js'])
  .pipe(jsmin())
  .pipe(gulp.dest('dist/js'));
});

gulp.task('pipe-js', () => {
  return gulp.src('src/js/*.min.js')
    .pipe(gulp.dest('dist/js'));
});

/* Сожми и перенеси html файлы */
gulp.task('minify', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/'));
});

/* Переносим php */
gulp.task('pipe-php', () => {
  return gulp.src('src/php/*.php')
    .pipe(gulp.dest('dist/php'));
});

/* Переносим шрифты */
gulp.task('pipe-fonts', () => {
  return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
});

/* Сжимаем изображения */
gulp.task('img', function () {
  return gulp.src('src/img/**/*')
    
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.jpegtran({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 3 }),
      imageminJpegRecompress({
        loops: 5,
        min: 65,
        max: 70,
        quality: 'medium'
      }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      }),
      imageminPngquant({ 
        quality: [0.6, 0.7], 
        speed: 5 
      })
    ]))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('dist', gulp.series('minify-css', 'minify-js', 'pipe-fonts', 'pipe-php', 'pipe-js' ,'minify', 'img'));

