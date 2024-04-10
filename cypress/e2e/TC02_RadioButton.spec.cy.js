/// <reference types="Cypress" />

describe('Radio Button Functionality', function(){

    it('Handling different Radio buttons', function(){

        //Basic Radio Button
        cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/')
        cy.get('#radio-choice-0a').should("not.be.checked").click({force:true})
        cy.get('#radio-choice-0b').should("not.be.checked").click({force:true})
        //the force true is used in case the actioned element is covered/isn't in plain sight
        //Moden Radio Button

        cy.get('#radio-choice-h-2b').should("not.be.checked").click({force:true})
        cy.get('#radio-choice-h-2c').should("not.be.checked").click({force:true})
        // cypressautomation
        // cypress@automation.co.za
        // test1234Cypress

    })
})