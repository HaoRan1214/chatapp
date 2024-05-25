// cypress/e2e/sample.cy.js
describe('My First Test', () => {
    it('Visits the app and checks the title', () => {
      cy.visit('/');
      cy.contains('Welcome'); // 修改为应用中实际存在的文本
    });
  });
  