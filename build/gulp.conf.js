module.exports = {
    tests: {
        unit: 'build/karma.conf.js',
        e2e: 'build/protractor.conf.js'
    },
    files: {
        js: {
            src: [
                'app/src/**/*.js',
                '!app/src/**/*.spec.js',
                '!app/src/**/*.scenario.js'
            ]
        },
        less: {
            src: 'app/src/**/*.less',
            dest: 'app/styles/',
            filename: 'ngScaffolding.css'
        },
        html: 'app/src/**/*.html',
        distDir: 'public/',
        sourceDir: 'app/src'
    },
    tasks: {
        connect: {
            lr: {
                port: 1337,
                root: [ 'app' ],
                livereload: true
            },
            e2e: {
                port: 1338,
                root: [ 'app' ],
                livereload: false
            }
        }
    }
}
