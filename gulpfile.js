const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin')

function comprimeImagens() {
    return gulp.src ('./images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function comprimeJavaScript() {
    return gulp.src('./JS')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./scripts'))
}

function compilaSass() {
    return gulp.src('./main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./CSS'))
}

function funcaoPadrao(callback) {
    setTimeout(function(){
        console.log("Executando via gulp")
        callback()
    },1000)
}

function dizOi(callback) {
    console.log("Olá Gulp");
    dizTchau();
    callback();
}

function dizTchau() {
    console.log("Tchau Gulp");
}

exports.default = gulp.parallel(funcaoPadrao, dizOi);
exports.dizOi = dizOi; 
exports.sass = compilaSass;
exports.watch = function() {
    gulp.watch('./main.scss', {ignoreInitial: false}, gulp.series(compilaSass))
}
exports.javascript = comprimeJavaScript;
exports.images = comprimeImagens;
