const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

gulp.task('default', ()=>{
    return tsProject.src()
        .pipe(tsProject())
        .pipe(concat('build.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build'))
})