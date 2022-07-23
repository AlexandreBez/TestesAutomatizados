/// <reference types="cypress" />

const { should } = require("chai");

describe('sincronismo', () => {

    before(() => {
        cy.visit('https://wcaquino.me/cypress/components.html');
    })

    beforeEach(() => {
        cy.reload();
    })

    it('aguarda elemento', () => {

        cy.get('#novoCampo')
            .should('not.exist');

        cy.get('#buttonDelay')
            .click();

        cy.get('#novoCampo')
            .should('not.exist');

        cy.get('#novoCampo')
            .should('exist');

        cy.get('#novoCampo')
            .type('funciona');
    })

    it('Deve fazer retrys', () => {

        cy.get('#buttonDelay')
            .click();

        cy.get('#novoCampo')
            // .should('not.exist')
            .should('exist')
            .type('funciona');

    })

    it('Uso do find', () => {
        cy.get('#buttonList')
            .click();

        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1');

        cy.get('#lista li span')
            .should('contain', 'Item 2');

        
        
        cy.get('#buttonListDOM')
            .click();

        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1');

        cy.get('#lista li span')
            .should('contain', 'Item 2');
    })

    it('Wait e Timeout', () => {
        cy.get('#buttonDelay')
            .click();

        // cy.get('#novoCampo', {timeout: 1000})
        //     .should('exist');

        cy.get('#novoCampo', {timeout: 10000})
            .should('exist');


        cy.get('#buttonListDOM')
            .click();

        cy.wait(5000);
            
        cy.get('#lista li span')
            .should('contain', 'Item 2');
    })

    it('Click retry', () => {
        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value', '111');
    })

    it('Should vs Then', () => {

        cy.get('#buttonListDOM').click();

        cy.get('#lista li span')
            .then($el => {
                console.log($el);
                expect($el).to.have.length(1);
                return 2;
            })
            .and('eq', 2)
            .and('have.id', 'buttonListDOM');
    })
})