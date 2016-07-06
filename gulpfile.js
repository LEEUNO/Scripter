var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');

var watch = require('gulp-watch');
var html2js = require('gulp-html2js');


var paths = {
  sass: ['./templates/**/*.scss', './scss/**/*.scss'],
  ionicSass: ['./scss/*.scss'],
  scripts: ['./src/**/*.js'],
  templates: ['./templates/**/*.html']
};

gulp.task('default', ['watch']);


gulp.task('sass-ionic', function (done) {
  gulp.src(paths.ionicSass)
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .on('error', sass.logError)
    .pipe(concat('ionic.app.min.css'))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('scripts', function () {
  return gulp.src(paths.scripts)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./www/js/'));
});

gulp.task('sass', function (done) {
  gulp.src(paths.sass)
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .on('error', sass.logError)
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});


gulp.task('watch', ['sass', 'sass-ionic', 'scripts', 'templates'], function () {
  watch(paths.sass, function () {
    gulp.start('sass');
  });
  watch(paths.ionicSass, function () {
    gulp.start('sass-ionic');
  });
  watch(paths.scripts, function () {
    gulp.start('scripts');
  });
  watch(paths.templates, function () {
    gulp.start('templates');
  })
});

gulp.task('install', ['git-check'], function () {
  return bower.commands.install()
    .on('log', function (data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function (done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});


gulp.task('templates', function () {
  gulp.src(paths.templates)
    .pipe(html2js({
      outputModuleName: 'TypistApp',
      useStrict: true
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('www/templates/'));
});


gulp.task('build', ['sass', 'sass-ionic', 'templates']);
