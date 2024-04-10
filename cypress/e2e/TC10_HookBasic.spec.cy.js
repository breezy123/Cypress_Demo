/*
1. Before => runs before everything
2. After => runs after everything
3. BeforeEach => runs based on the number of tests we have
4. AfterEach => executes the number of times we have the it blocks
*/

/// <reference types="Cypress" />

describe('Hooks Basic',function(){

    before(function(){
        cy.log('Before block')
    })
 
    beforeEach(function(){
        cy.log('Before Each block')
    })
 
    it('Search item',function(){
        cy.log('This is Search item block')
    })
 
    it('Order item',function(){
        cy.log('This is Order item block')
    })
 
    it('Check out item',function(){
        cy.log('This is Check out item block')
    })
 
    afterEach(function(){
        cy.log('After Each block')
    })
 
    after(function(){
        cy.log('After block')
    })
})