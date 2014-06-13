exports.config = {
    specs: [
        '../app/**/*.scenario.js'
    ],

    capabilities: {
        'browserName': 'phantomjs',
        'phantomjs.binary.path':'./node_modules/phantomjs/bin/phantomjs'
    },

    baseUrl: 'http://localhost:1338/'
};
