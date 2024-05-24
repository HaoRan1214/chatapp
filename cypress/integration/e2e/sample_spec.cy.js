// cypress/e2e/sample_spec.cy.js

describe('My First Test', () => {
    it('Visits the app and checks the title', () => {
      cy.visit('/');
      cy.contains('Welcome');
    });
  });
  