// cypress.config.cjs
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
<<<<<<< HEAD
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
=======
    supportFile: false // 不使用支持文件
>>>>>>> c0f3c780565deaac43e09e45fc05a4bd045c94c6
  },
});
