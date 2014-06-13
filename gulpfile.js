var path = require('path'),
    args = require('yargs').argv,

    open = require('open'),
    rimraf = require('rimraf'),
    karma = require('karma').server,

    gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    config = require('./build/gulp.conf.js');

// --- Web Server(s) ---

gulp.task('connect:e2e', function (callback) {
    plugins.connect.server(config.tasks.connect.e2e);
    callback();
});

gulp.task('connect:lr', function (callback) {
    plugins.connect.server(config.tasks.connect.lr);
    callback();
});

gulp.task('open', function (callback) {
    open('http://localhost:' + config.tasks.connect.lr.port, args.open);
    callback();
});

// Watch Files for Changes
gulp.task('watch', function () {
    gulp.watch(config.files.less.src, ['less']);
});

// ... And Reload
gulp.task('livereload', function () {
    gulp.src([].concat(
            config.files.html,
            config.files.js.src,
            config.files.less.dest + config.files.less.filename
        ))
        .pipe(plugins.watch())
        .pipe(plugins.connect.reload());
});

gulp.task('clean', function (cb) {
    rimraf(config.files.distDir, cb);
});

gulp.task('less', function () {
    gulp.src(config.files.less.src)
        .pipe(plugins.changed('app/src/', {
            extension: '.css'
        }))
        .pipe(plugins.concat(config.files.less.filename))
        .pipe(plugins.less())
        .pipe(gulp.dest(config.files.less.dest));
});

// --- Tests ---

gulp.task('unit', function (done) {
    karma.start({
        configFile: path.resolve(config.tests.unit),
        singleRun: true
    }, done).on('error', util.log);
});

gulp.task('e2e', ['connect:e2e'], function (cb) {
    gulp.src(require(path.resolve(config.tests.e2e)).config.specs, {
        read: false
    }).pipe(plugins.protractor.protractor({
		configFile: config.tests.e2e
	})).on('error', function (e) {
		connect.serverClose();
		util.log(e);
		cb();
	}).on('end', function() {
		connect.serverClose();
		cb();
	});
});

/*
 * $ gulp test
 */
gulp.task('test', ['unit', 'e2e']);

/*
 * $ gulp server
 */
gulp.task('server', ['connect:lr', 'open']);

/*
 * $ gulp
 *
 * The custom watch() function allows us to just reload the changed files,
 * whereas the built-in gulp.watch() command would reload all files
 * and not just the changed ones. Because of this single additional task,
 * we don't need a .pipe(connect.reload()) command after each compile step.
 */
gulp.task('default', ['server', 'livereload', 'watch']);