// https://gist.github.com/demisx/beef93591edc1521330a

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var changed = require('gulp-changed');
var stylus = require('gulp-stylus');
var grep = require('gulp-grep');
var browserSync = require('browser-sync');
var bs;

gulp.task('stylus', function() {
    if (bs) {
        bs.notify("Compiling, please wait!");
    }
    var stream = gulp.src('styles/*.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus({
            paths: [__dirname + '/node_modules']
        }))
        .pipe(sourcemaps.write('.', {sourceRoot: '/'}))
        .pipe(gulp.dest('public/'))
        .pipe(grep('**/*.css', {read: false, dot: true}));
    if (bs) {
        stream.pipe(bs.stream());
    }
    return stream;
});


gulp.task('js', function() {
    if (bs) {
        bs.notify("Compiling, please wait!");
    }
    var stream = gulp.src('src/**/*.{js,jsx}')
        .pipe(changed('lib/', { extension: '.js' }))
        .pipe(sourcemaps.init())
        .pipe(babel({
            blacklist: [
                'regenerator',
                'es6.forOf',
                // 'es6.arrowFunctions',
                'es6.constants',
                'es6.blockScoping',
            ],
            optional: ['asyncToGenerator', 'minification.deadCodeElimination'],
            plugins: ['defines'],
            extra: {
                defines: {
                    SERVER: true,
                    BROWSER: false,
                }
            }
        }))
        .pipe(sourcemaps.write('.', {sourceRoot: '/'}))
        .pipe(gulp.dest('lib/'));
    if (bs) {
        stream.pipe(bs.stream());
    }
    return stream;
});


gulp.task('js-browser', function() {
    if (bs) {
        bs.notify("Compiling, please wait!");
    }
    var stream = gulp.src('src-browser/**/*.{js,jsx}')
        .pipe(changed('public/js/', { extension: '.js' }))
        .pipe(sourcemaps.init())
        .pipe(babel({
            optional: ['minification.deadCodeElimination']
        }))
        .pipe(sourcemaps.write('.', {sourceRoot: '/'}))
        .pipe(gulp.dest('public/js/'));
    if (bs) {
        stream.pipe(bs.stream());
    }
    return stream;
});


gulp.task('all', gulp.parallel('stylus', 'js', 'js-browser'));
gulp.task('build', gulp.series('all'));

gulp.task('watch:styles', function() {
    gulp.watch('styles/**/*.styl', gulp.series('stylus'));
});

gulp.task('watch:js', function() {
    gulp.watch('src/**/*.{js,jsx}', gulp.series('js'));
});

gulp.task('watch:js-browser', function() {
    return gulp.watch('src-browser/**/*.{js,jsx}', gulp.series('js-browser'));
});

var daemon = require('springbokjs-daemon').node([ 'lib/index.js' ]);
process.on('exit', function(code) {
    daemon.stop();
});
gulp.task('runandwatch:server', function() {
    daemon.start();
    gulp.watch(['lib/**/*.{js,jsx}', '../lib/**/*.js']).on('change', function() {
        daemon.restart();
    });
})



gulp.task('watch', gulp.parallel('watch:styles', 'watch:js', 'watch:js-browser', 'runandwatch:server'));

gulp.task('ws', function(cb) {
    bs = browserSync.create();
    bs.init({
        proxy: "localhost:3000",
        port: 4000,
        notify: false,
        open: false
    }, cb);
});

gulp.task('default', gulp.series('build', 'ws', 'watch'));
