var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('tsCompile', function() {
    // 注意顺序
    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('htmlDist', function() {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('tsWatch', function() {
    gulp.watch('./src/*.ts', ['tsCompile'])
});

gulp.task('default', ['htmlDist', 'tsCompile', 'tsWatch']);