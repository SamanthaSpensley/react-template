/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */


const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('build', ['lint'], () =>
  gulp.src(['src/**/*.js']) // looking for any file with js extension
  .pipe(babel()) // transpiling to ES5
  .pipe(gulp.dest('lib')) // rewriting file to 'lib' file
);

gulp.task('lint', () =>
  gulp.src([
    // 'gulpfile.js',
    'src/**/*.js',
    'src/**/*.jsx',
  ])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
);
