/* eslint-disable no-undef */
describe('SUCCESS', () => {
    it('submits formdata successfully', () => {
        cy.visit('http://localhost:5173/')
    });

    it('submits formdata successfully', () => {
        cy.visit('http://localhost:5173/')
        cy.get('[data-cy="route-login"]').as("LoginLink");

        cy.get("@LoginLink").click();

        cy.url().should("contain", "/login")
    });    
});

describe('FAIL', () => {
    it.skip('passes', () => {
        cy.visit('http://localhost:5173/')
    });
});