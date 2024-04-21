/// <reference types="Cypress" />,

Cypress.config('baseUrl','https://react-redux.realworld.io/')


describe('Login Functionality', function(){

    it('Login Test using Conduit', function(){
        cy.visit('https://react-redux.realworld.io/')
        cy.get('a[href="#login"]').click()
        cy.get('input[type="email"]').type('cypress@automation.co.za')
        cy.get('input[type="password"]').type('test1234Cypress')
        cy.get('button[type="submit"]').click()
        cy.get('a[href="#settings"]').click()
        cy.get('.btn.btn-outline-danger').click()

    })
})