/// <reference types="Cypress" />

describe('Dropdown Functionality', function(){

    xit('Handling Static Dropdown', function(){

        cy.visit('https://seleniumbase.io/demo_page')
        cy.get('#mySelect').select('Set to 100%').should('have.value','100%')
        cy.get('#mySelect').select('Set to 50%').should('have.value','50%')
        cy.get('#mySelect').select('Set to 75%').should('have.value','75%')
    })

    xit('Handling Dynamic Dropdown', function(){

        cy.visit('https://demos.telerik.com/aspnet-ajax/dropdownlist/examples/overview/defaultcs.aspx')
        cy.get('#ctl00_ContentPlaceholder1_RadDropDownProducts').click()
        cy.get('.rddlItem').contains('Alice Mutton  ').click()

    })

    it('Handling Multiple DropDown',function(){
        cy.visit('https://demo.mobiscroll.com/select/multiple-select')
        cy.get('#multiple-select-input').click({force: true})
        cy.get('div[class="mbsc-scroller-wheel-item mbsc-ios mbsc-ltr mbsc-wheel-item-checkmark mbsc-wheel-item-multi"]').contains('Electronics & Computers').click()
        cy.get('div[class="mbsc-scroller-wheel-item mbsc-ios mbsc-ltr mbsc-wheel-item-checkmark mbsc-wheel-item-multi"]').contains('Health & Beauty').click()
    })
})