var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        sindleRun: true,
        frameworks: ['mocha'],
        files: [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/foundationj-sites/dist/foundation.min.js',
            'app/**/*.test.js'
        ],
        preprocessors: {
            'app/**/*.test.js': ['webpack', 'sourcemap']
        },
        reporters: ['mocha'],
        client: {
            mocha: {
                timeout: '10000'
            }
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    });
};