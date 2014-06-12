module.exports = {
    tests: {
        unit: 'build/karma.conf.js'
    },
    files: {
        less: {
            src: 'app/src/**/*.less',
            dest: 'app/styles/'
        }
    }
}
