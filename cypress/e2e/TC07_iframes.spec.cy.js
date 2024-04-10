/// <reference types="Cypress" />

describe('iframes Functionality', function(){

    it('Handling iFrames', function(){

        cy.visit('http://the-internet.herokuapp.com/iframe')
        cy.get('#mce_0_ifr').within(function($iframe){
            const element =$iframe.contents().find('#tinymce')
            cy.wrap(element).clear().type('Hello Cypress')
        })
    
    })
})