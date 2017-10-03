const gulp = require('gulp'),
      sass = require('gulp-sass'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      cssnano = require('cssnano'),
      babel = require('gulp-babel');
      uglify = require('gulp-uglify');
      image = require('gulp-image'),
      del = require('del'),
      runSequence = require('run-sequence'),
      watch = require('gulp-watch'),
      livereload = require('gulp-livereload');

gulp.task('clean', () =>
  del(
    './public/assets/css',
    './public/assets/js',
    './public/*.html'
  )
);

gulp.task('pages', () =>
  gulp.src('./_pages/*.html')
    .pipe(gulp.dest('./public'))
    .pipe(livereload())
);

gulp.task('image', () =>
  gulp.src('./_assets/images/**/*')
    .pipe(image())
    .pipe(gulp.dest('./public/assets/img'))
);

gulp.task('sass',function () {
  let processors = [
    autoprefixer,
    cssnano
  ];
  return gulp.src('./_assets/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./public/assets/css'))
    .pipe(livereload())
});

gulp.task('js-libs', function () {
  return gulp.src('./_assets/scripts/libs/*.js')
      .pipe(gulp.dest('./public/assets/js/libs'))
});

gulp.task('js', function () {
  return gulp.src('./_assets/scripts/*.js')
      .pipe(babel())
      .pipe(uglify())
      .pipe(gulp.dest('./public/assets/js'))
      .pipe(livereload())
});

gulp.task('fonts', function () {
  return gulp.src('./_assets/fonts/*')
      .pipe(gulp.dest('./public/assets/font'))
});

gulp.task('build', function(done) {
    runSequence('clean', 'pages', 'image', 'sass', 'js-libs', 'js', 'fonts', function() {
        done();
    });
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./_pages/*.html', ['pages']);
  gulp.watch('./_assets/images/*', ['image']);
  gulp.watch('./_assets/styles/**/*.scss', ['sass']);
  gulp.watch('./_assets/scripts/*.js', ['js']);
});

gulp.task('default', ['build', 'watch']);