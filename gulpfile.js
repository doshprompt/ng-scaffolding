var path = require('path'),
    args = require('yargs').argv,

    del = require('del'),
    karma = require('karma').server,
    browserSync = require('browser-sync'),
    reload = browserSync.reload,

    gulp = require('gulp'),
    util = require('gulp-util'),
    plugins = require('gulp-load-plugins')(),
    config = require('./build/gulp.conf.js'),

    bs; // save a reference to the running instance of browserSync

function errorHandler (err) {
    'use strict';

    util.beep();
    util.log(err);
}

// --- Web Server(s) ---

gulp.task('connect:e2e', function (callback) {
    'use strict';

    bs = browserSync({
        notify: false,
        server: {
            baseDir: 'app'
        },
        ports: {
            min: 1338
        },
        open: false
    });

    callback();
});

gulp.task('connect:lr', function (callback) {
    'use strict';

    browserSync({
        notify: false,
        server: {
            baseDir: 'app'
        },
        ports: {
            min: 1337
        }
    });

    callback();
});

// Watch Files for Changes
gulp.task('watch', function () {
    'use strict';

    gulp.watch(config.files.less.src, ['less']);
    gulp.watch(config.files.html, reload);
    gulp.watch(config.files.js.src, ['jshint:app']);
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
        .pipe(plugins.if(config.tasks.csslint, plugins.csslint.reporter()))
        .pipe(reload({ stream: true }));
});

// --- Lint JavaScript ---

gulp.task('jshint:app', function () {
    gulp.src(config.files.js.src)
        .pipe(plugins.jshint(config.tasks.jshint))
        .pipe(plugins.jshint.reporter('jshint-stylish'))
        .pipe(reload({ stream: true }));
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
    }, done);
});

gulp.task('e2e', ['connect:e2e'], function (cb) {
    gulp.src(require(path.resolve(config.tests.e2e)).config.specs, {
        read: false
    }).pipe(plugins.protractor.protractor({
		configFile: config.tests.e2e
	})).on('error', function (e) {
        bs.cleanup(); // stop server, cleanup events etc. and shutdown
		errorHandler(e);
        cb();
        process.exit(1); // Exit the process
	}).on('end', function() {
        bs.cleanup();
		cb();
	}).pipe(plugins.exit()); // ensures that the task is terminated after it has finished running.
});

/*
 * $ gulp clean
 *
 * Clean Output Directory
 */
gulp.task('clean', del.bind(null, [ config.files.distDir ]));

/*
 * $ gulp test
 *
 * Runs both unit and end-to-end tests
 */
gulp.task('test', ['unit', 'e2e']);

/*
 * $ gulp server
 *
 * The custom watch() function allows us to just reload the changed files,
 * whereas the built-in gulp.watch() command would reload all files
 * and not just the changed ones. Because of this single additional task,
 * we don't need a .pipe(connect.reload()) command after each compile step.
 */
gulp.task('server', ['less', 'jshint:app', 'connect:lr', 'watch']);
