const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  reporter:'cypress-mochawesome-reporter',
  e2e: {
    video: false,  // Ensures Cypress records videos
    screenshotOnRunFailure: false,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      config.specPattern = [
        'cypress/e2e/LoginTest.cy.js'
      ]
      return config;
    },
  },
});
