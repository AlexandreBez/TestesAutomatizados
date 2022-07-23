/// <reference types="cypress" />

describe('Cypress basic', () => {

    it('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/components.html');
        
        // const title = cy.title();
        // console.log(title);

        // cy.pause();

        // cy.title().should('be.equal', 'Campo de Treinamento').debug();
        
        cy.title().should('be.equal', 'Campo de Treinamento');
        cy.title().should('contain', 'Campo');

        cy.title()
            .should('contain', 'Campo')
            .and('be.equal', 'Campo de Treinamento');

        cy.title().then(title => {
            console.log(title);
        });
    })

    it('Should find and interact with an element', () => {
        cy.visit('https://wcaquino.me/cypress/components.html');

        cy.get('nao existe');

        cy.get('#buttonSimple').click();
        cy,get('#buutonSimple').should('have.value', 'Obrigado');
    })
})