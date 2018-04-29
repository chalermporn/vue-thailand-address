// Karma configuration
// Generated on Mon Aug 14 2017 12:20:36 GMT+0700 (ICT)

const webpackConfig = require('./build/webpack.test.config');

module.exports = function (config) {
	config.set({
		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['mocha'],

		// list of files / patterns to load in the browser
		files: [{ pattern: 'test/**/*.ts', watched: false }],

		// list of files to exclude
		exclude: [],

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'test/**/*.ts': ['webpack', 'sourcemap']
		},

		mime: {
			'text/x-typescript': ['ts']
		},

		// webpack config
		webpack: webpackConfig,

		webpackMiddleware: {
			stats: 'errors-only'
		},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['mocha'],

		client: {
			mocha: {
				reporter: 'html'
			}
		},

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: [
			process.env.CI ? 'FirefoxHeadless' : 'FirefoxNightlyHeadless'
		],

		customLaunchers: {
			FirefoxHeadless: {
				base: 'Firefox',
				flags: ['-headless']
			},
			FirefoxNightlyHeadless: {
				base: 'FirefoxNightly',
				flags: ['-headless']
			}
		},

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity,

		browserNoActivityTimeout: 30000
	});
};