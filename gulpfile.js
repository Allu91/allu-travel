var gulp = require('gulp'),
watch = require('gulp-watch');


// gulp.task('default', function(done) {
//     console.log('Hooray - gulptask created');
//     done();
// });

// gulp.task('html', function(done) {
//     console.log('Imagine something useful done here to HTML');
//     done();
// });


// gulp.task('watch', function() {

//     // GULP.START DEPRECATED ???
//     watch('./app/index.html', function() {
//         gulp.start('default');
//     });

// });



        // Udemy version - gulp-end.zip
var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
  console.log("Hooray - you created a Gulp task.");
});

gulp.task('html', function() {
  console.log("Imagine something useful being done to your HTML here.");
});

gulp.task('styles', function() {
  console.log("Imagine Sass or PostCSS tasks running here.");
});

gulp.task('watch', function() {

  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });

});




        // Udemy version - gulpcss-end.zip
// var gulp = require('gulp'),
// watch = require('gulp-watch'),
// postcss = require('gulp-postcss'),
// autoprefixer = require('autoprefixer'),
// cssvars = require('postcss-simple-vars'),
// nested = require('postcss-nested');

// gulp.task('default', function() {
//   console.log("Hooray - you created a Gulp task.");
// });

// gulp.task('html', function() {
//   console.log("Imagine something useful being done to your HTML here.");
// });

// gulp.task('styles', function() {
//   return gulp.src('./app/assets/styles/styles.css')
//     .pipe(postcss([cssvars, nested, autoprefixer]))
//     .pipe(gulp.dest('./app/temp/styles'));
// });

// gulp.task('watch', function() {

//   watch('./app/index.html', function() {
//     gulp.start('html');
//   });

//   watch('./app/assets/styles/**/*.css', function() {
//     gulp.start('styles');
//   });

// });











// const  { series } = require('gulp');
// const { watch } = require('gulp-watch');


// Clean function not exported -> private task
// function clean(props) {
//     console.log('Clean task executed');
//     props();
// }
// function build(props) {
//     console.log('build task executed')
//     props();
// }
// exports.default = series(clean, build);



// gulp.task('task1', function() {
//     console.log('Task 1 executed');
// });
// gulp.task('task2', function() {
//     console.log('Task 2 executed');
// });

// gulp.task('clean', function() {
//     console.log('Clean executed');
// });

// gulp.task('default', 
//     gulp.series('clean', gulp.parallel('task1', 'task2'),
//     function() {
//         console.log('default task executed');
//     })
// );

