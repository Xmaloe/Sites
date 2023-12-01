const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');

function funcaoPadrao(callback) {
    setTimeout(function() {
        console.log("Executando via gulp");
        callback();
    }, 1000);
}

function comprimeImagens() {
    return gulp.src('./images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function compilaSass() {
    return gulp.src('./source/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build'));
}

function comprimeJavaScript() {
    return gulp.src('./source/main.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build'));
}


exports.default = gulp.parallel(compilaSass, comprimeJavaScript, funcaoPadrao, comprimeImagens);
exports.sass = compilaSass;
exports.javascript = comprimeJavaScript;
exports.images = comprimeImagens;

