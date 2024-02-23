const { defineConfig } = require("cypress");

module.exports = defineConfig({
  execTimeout: 61000,
  experimentalStudio: true,
  userAgent: null,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  defaultCommandTimeout: 11000,
  pageLoadTimeout: 910000,
  viewportWidth: 1200,
  requestTimeout: 91000,
  viewportHeight: 860,
  responseTimeout: 610000,
  chromeWebSecurity: true,
  videoCompression: false,
  screenshotOnRunFailure: true,
  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  
  },
});
