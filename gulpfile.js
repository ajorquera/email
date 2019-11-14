const gulp = require('gulp');
const connect = require('gulp-connect');

gulp.task('copy', () => {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});

gulp.task('watch', () => {
    gulp.watch('./src/*.html', gulp.series('copy'));
});

gulp.task('serve', () => {
    connect.server({
        root: 'dist',
       livereload: true
    });
});

gulp.task('default', gulp.parallel('watch', 'serve'));

