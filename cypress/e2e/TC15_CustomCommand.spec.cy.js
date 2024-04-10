/// <reference types="Cypress" />
 
describe('Fixtures test',function(){
 
    beforeEach(function(){
        cy.fixture('conduitLoginData').as('data')
    })
 
    it('Conduit - Valid Credentials',function(){
        cy.conduitLogin(this.data.validEmail,this.data.validPassword)
        cy.contains('Settingszzz').click()
        cy.contains('Or click here to logout.').click()
    })
 
    it('Conduit - Invalid Credentials',function(){
        cy.conduitLogin(this.data.invalidEmail,this.data.invalidPassword)
        cy.get('.error-messages').should('contain','email or password is invalid')
    })
})