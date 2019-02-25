var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
    console.log('Hooray - gulptask created');
});

gulp.task('html', function() {
    console.log('Imagine something useful done here to HTML');
});


gulp.task('watch', function() {

    // GULP.START DEPRECATED ???
    watch('./app/index.html', function() {
        gulp.start('html');
    });

});