const gulp = require('gulp')
const plumber = require('gulp-plumber')
const sass = require('gulp-sass')
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

gulp.task('default', ['styles'], () => {
  // Launch the app once SASS is compiled
  gulp
    .src('./**/**')
    .pipe(exec('npm start'))
})