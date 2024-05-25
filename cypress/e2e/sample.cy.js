// cypress/e2e/sample.cy.js
describe('My First Test', () => {
  it('Visits the app and checks the title', () => {
    cy.visit('/');
    cy.contains('Login'); // 确保这里的文本存在于页面上
  });
});
