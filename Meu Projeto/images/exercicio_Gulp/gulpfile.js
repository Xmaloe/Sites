const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin')

function comprimeImagens() {
    return gulp.src ('./build/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/imagens'))
}

function comprimeJavaScript() {
    return gulp.src('./build/JS/index.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/JS/scripts'))
}

function compilaSass() {
    return gulp.src('./styles/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./styles/CSS'))
}

function funcaoPadrao(callback) {
    setTimeout(function(){
        console.log("Executando via gulp")
        callback()
    },1000)
}

exports.default = gulp.parallel(funcaoPadrao, compilaSass, comprimeJavaScript, comprimeImagens);
exports.sass = compilaSass;
exports.watch = function() {
    gulp.watch('./styles/main.scss', {ignoreInitial: false}, gulp.series(compilaSass))
}

exports.javascript = comprimeJavaScript;
exports.images = comprimeImagens;
