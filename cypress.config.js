const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // screenshotOnRunFailure: false,
  // video: false,
  projectId:'85ca4078-089d-4ea7-a30a-e66d9a101798',
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl:"https://www.google.com"
  },
});
