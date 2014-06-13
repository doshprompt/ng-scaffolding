var path = require('path'),
    args = require('yargs').argv,

    open = require('open'),
    rimraf = require('rimraf'),
    karma = require('karma').server,

    gulp = require('gulp'),
    util = require('gulp-util'),
    plugins = require('gulp-load-plugins')(),
    config = require('./build/gulp.conf.js');

function errorHandler (err) {
    'use strict';

    util.beep();
    util.log(err);
}

// --- Web Server(s) ---

gulp.task('connect:e2e', function (callback) {
    'use strict';

    plugins.connect.server(config.tasks.connect.e2e);
    callback();
});

gulp.task('connect:lr', function (callback) {
    'use strict';

    plugins.connect.server(config.tasks.connect.lr);
    callback();
});

gulp.task('open', function (callback) {
    'use strict';

    open('http://localhost:' + config.tasks.connect.lr.port, args.open);
    callback();
});

// Watch Files for Changes
gulp.task('watch', function () {
    'use strict';

    gulp.watch(config.files.less.src, ['less']);
    gulp.watch(config.files.less.js, ['jshint:app']);
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
        .pipe(plugins.changed(config.files.sourceDir, {
            extension: '.css'
        }))
        .pipe(plugins.if(config.tasks.recess,
            plugins.recess(config.tasks.recess instanceof Object ? config.tasks.recess : undefined)
                .on('error', errorHandler)
        ))
        .pipe(plugins.concat(config.files.less.filename))
        .pipe(plugins.less())
        .pipe(gulp.dest(config.files.less.dest))
        .pipe(plugins.if(config.tasks.csslint,
            plugins.csslint(typeof config.tasks.csslint == 'boolean' ? undefined : config.tasks.csslint)))
        .pipe(plugins.if(config.tasks.csslint, plugins.csslint.reporter()));
});

// --- JSHint ---

gulp.task('jshint:app', function () {
    gulp.src(config.files.js.src)
        .pipe(plugins.jshint(config.tasks.jshint))
        .pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('jshint:tests', function () {
    gulp.src([
            'app/src/**/*.spec.js',
            'app/src/**/*.scenario.js'
        ])
        .pipe(plugins.jshint(config.tasks.jshint))
        .pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('jshint:gulpfile', function () {
    gulp.src('gulpfile.js')
        .pipe(plugins.jshint(config.tasks.jshint))
        .pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('jshint:ci', function () {
    gulp.src(config.files.js.src)
        .pipe(plugins.jshint(config.tasks.jshint))
        .pipe(plugins.jshint.reporter('default'))
        .pipe(plugins.jshint.reporter('fail'));
});

// --- Tests ---

gulp.task('unit', function (done) {
    karma.start({
        configFile: path.resolve(config.tests.unit),
        singleRun: true
    }, done).on('error', errorHandler);
});

gulp.task('e2e', ['connect:e2e'], function (cb) {
    gulp.src(require(path.resolve(config.tests.e2e)).config.specs, {
        read: false
    }).pipe(plugins.protractor.protractor({
		configFile: config.tests.e2e
	})).on('error', function (e) {
		plugins.connect.serverClose();
		errorHandler(e);
		cb();
	}).on('end', function() {
		plugins.connect.serverClose();
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
gulp.task('default', ['less', 'jshint:app', 'server', 'livereload', 'watch']);