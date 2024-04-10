/// <reference types="Cypress" />

describe('Handling Different Alerts', function(){

    it('Simple Alert', function(){
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Alert').click()
        cy.on('window:alert',(str)=> {
            expect(str).to.equal('I am a JS Alert')
        })
        cy.get('#result').should('contain','You successfully clicked an alert')
    })

    it('Confirmation Alert - OK Button', function(){
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', (str)=>{
            expect(str).to.equal('I am a JS Confirm')
        })
        cy.get('#result').should('contain','You clicked: Ok')
    })

    it('Confirmation Alert - Cancel Button', function(){
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', (str)=>{
            expect(str).to.equal('I am a JS Confirm')
            return false
        })
        cy.get('#result').should('contain','You clicked: Cancel')
    })

    it('Prompt Alert', function(){
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function(win) {
            cy.stub(win, 'prompt').returns('Hello Prompt Alert')
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').should('contain','Hello Prompt Alert')
    })
})