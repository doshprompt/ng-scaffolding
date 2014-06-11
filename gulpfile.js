var gulp = require('gulp'),
    path = require('path'),
    karma = require('karma').server,
    config = require('./build/gulp.conf.js');

require('matchdep')
    .filterDev('gulp-*')
    .forEach(function(module) {
        global[module.replace(new RegExp('^gulp-'), '')] = require(module);
    });

gulp.task('unit', function (done) {
    karma.start({
        configFile: path.resolve(config.tests.unit),
        singleRun: true
    }, done);
});

/*
 * $ gulp test
 */
gulp.task('test', ['unit']);