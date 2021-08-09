/// <reference types="cypress" />

describe('', () => {
  before('', () => {
  cy.visit ('https://react-redux.realworld.io/#/login?_k=ut2fo6');
  });

  it('',() => {
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get(':nth-child(1) > .form-control').type('puppy11@i.ua');
    cy.get(':nth-child(2) > .form-control').type('Pa$$w0rd!');
    cy.get('.btn').click();
    cy.get('.navbar').contains('Puppy').should('exist');
  });
});