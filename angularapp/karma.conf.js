// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-spec-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/angularapp'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['spec'], 
    specReporter: {
      suppressSkipped: false,
      suppressPassed: false,
      showSpecTiming: false, // ✅ Remove timing from success/failure messages
      prefixes: {
        success: "SUCCESS-",  // ✅ Only "SUCCESS-" will appear
        failure: "FAILED-",   // ✅ Only "FAILED-" will appear
        skipped: "SKIPPED-"
      }
    },
    colors: false, // ✅ Disables ANSI colors
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-gpu',
          '--disable-dev-shm-usage',
          '--remote-debugging-port=9222'
        ],
      },
    },
    singleRun: true,
    autoWatch: false,
    restartOnFileChange: true
  });
};
