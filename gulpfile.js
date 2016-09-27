var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var del = require('del');
var minifyCss = require("gulp-minify-css");


var paths = {
    scripts: {
        srcWatch: ['./src/app/**/*.js','./js/*.js'],
        libs : ["./src/css/vendor/*.js"],
        src: ["./src/app/app.js", "./src/app/settings/*.js", "./src/app/services/*.js"
            , "./src/app/components/*.js", "./src/app/controllers/*.js", "./src/js/*.js" ],
        dest: "./dist/js/"
    },
    css: {
        srcWatch: ["./src/css/style.css"],
        libs : ["./src/css/vendor/*.css"],
        src: ["./src/css/vendor/*.css","./src/css/*.css"],
        dest: "./dist/css/"
    },
    images: {
        src: ["./src/img/**/*"],
        dest: "./dist/img"
    }
};

gulp.task("scripts", function () {
    return gulp.src( paths.scripts.libs ,paths.scripts.src)
        .pipe(concat("app.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.dest));
});

gulp.task('minify-css', function () {
	gulp.src( paths.css.src) // path to your file
    .pipe(concat("style.min.css"))
	.pipe(minifyCss())
	.pipe(gulp.dest(paths.css.dest));
});

gulp.task('clean', function () {

    return del(['dist']);
});

// Copy all static images
gulp.task('images', ['clean'], function () {
    return gulp.src(paths.images.src)
        // Pass in options to the task
        .pipe(imagemin({ optimizationLevel: 5 }))
        .pipe(gulp.dest(paths.images.dest));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
    gulp.watch(paths.scripts.srcWatch, ['scripts']);
    gulp.watch(paths.css.srcWatch, ['minify-css']);
    console.log("gulp is watching your files ");
});

// The default task (called when you run `gulp` from cli)
// 'watch', 
gulp.task('default', ['watch', 'images', 'scripts', 'minify-css']);
