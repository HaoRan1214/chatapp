// cypress/integration/sample_spec.js
describe('My First Test', () => {
  it('Visits the app and checks the title', () => {
    cy.visit('/');
    cy.contains('Welcome');
  });
});
