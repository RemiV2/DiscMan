const gulp = require('gulp')
const plumber = require('gulp-plumber')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const exec = require('gulp-exec')

gulp.task('styles', () => {
  gulp
    .src(['css/sass/**/*.sass'])
    .pipe(
      plumber({
        errorHandler: function (error) {
          console.log(error.message)
          this.emit("end")
        }
      })
    )
    .pipe(sass())
    .pipe(gulp.dest('css'))
})

gulp.task('scripts', () => {
  gulp
    .src('js/app.js')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message)
        this.emit('end')
      }
    }))
    .pipe(concat'main.js')
    .pipe(babel())
    .pipe('js/build')
})

gulp.task('default', ['styles', 'scripts'], () => {
  // Launch the app once SASS is compiled and JS is bundled
  gulp
    .src('./**/**')
    .pipe(exec('npm start'))
})