const gulp = require("gulp");
const postcss = require("gulp-postcss");
const tailwindcss = require("tailwindcss");
const gutil = require('gulp-util')
const plumber = require('gulp-plumber')
const uglifycss = require('gulp-uglifycss');


const PATHS = {
    css: "./style/style.css",
    config: "./tailwind.js",
    dist: "static/css/"
};

gulp.task("css", () => {
    return gulp
        .src(PATHS.css)
        .pipe(plumber(function (error) {
            console.log(error);
            this.emit('end');
        }))
        .pipe(postcss(
            [
                tailwindcss(PATHS.config),
                require("autoprefixer")
            ]))
        .pipe(uglifycss({"maxLineLen": 80, "uglyComments": true}))
        .pipe(gulp.dest(PATHS.dist));
});

gulp.task("default", ["css"]);

gulp.task("watch", () => {
    gulp.watch([PATHS.css, PATHS.config], ["css"]);
});