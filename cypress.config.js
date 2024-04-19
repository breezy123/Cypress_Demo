const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // screenshotOnRunFailure: false,
  // video: false,
  projectId:'jxh8bg',
  "reporter": "cypress-multi-reporters",
  "reporterOptions":{
    "reporterEnabled": "mochawesome",
    "mochawesomeReporterOptions":{
      "reportDir": "cypress/reports/mocha",
      "quiet":true,
      "overwrite":false,
      "html":false,
      "json":true
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl:"https://www.google.com"
  },
});
