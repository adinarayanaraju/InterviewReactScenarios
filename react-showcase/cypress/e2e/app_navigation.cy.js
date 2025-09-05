/// <reference types="cypress" />

describe('Application Navigation Flow', () => {
  beforeEach(() => {
    // Start from the home page for each test
    cy.visit('http://localhost:3000');
  });

  it('should display the main menu on load', () => {
    cy.contains('h1', 'React Concepts Showcase').should('be.visible');
  });

  it('should navigate to the Controlled Form task and back', () => {
    // Find the button for the "Controlled Form" task and click it
    cy.contains('button', '1: Controlled Form').click();

    // Assert that the new page has loaded
    cy.contains('h2', 'Task 1: Controlled Form').should('be.visible');

    // Find the back button and click it
    cy.contains('button', /back to menu/i).click();

    // Assert that we are back on the main menu
    cy.contains('h1', 'React Concepts Showcase').should('be.visible');
  });

  it('should navigate to the Redux Toolkit task', () => {
    cy.contains('button', '21: Redux Toolkit Auth').click();
    cy.contains('h2', 'Task 21: Redux Toolkit for Authentication').should('be.visible');
  });
});
