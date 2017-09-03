const gulp = require('gulp'),
      sass = require('gulp-sass'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      cssnano = require('cssnano'),
      del = require('del'),
      runSequence = require('run-sequence'),
      watch = require('gulp-watch'),
      livereload = require('gulp-livereload');

gulp.task('clean', () =>
  del('./public')
);

gulp.task('pages', () =>
  gulp.src('./_pages/*.html')
    .pipe(gulp.dest('./public'))
    .pipe(livereload())
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

gulp.task('build', function(done) {
    runSequence('clean', 'pages', 'sass', function() {
        done();
    });
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./_assets/styles/**/*.scss', ['sass']);
  gulp.watch('./_pages/*.html', ['pages']);
});

gulp.task('default', ['build', 'watch']);
