/// <reference types="cypress" />

describe('Work with basic elements', () => {

    // before(() => {
    //     cy.visit('https://wcaquino.me/cypress/components.html');
    // })

    // beforeEach(() => {
    //     cy.visit('https://wcaquino.me/cypress/components.html');
    // })

    before(() => {
        cy.visit('https://wcaquino.me/cypress/components.html');
    })

    beforeEach(() => {
        cy.reload();
    })

    it('Text', () => {
        cy.get('body').should('contain', 'Cuidado');
        cy.get('span').should('contain', 'Cuidado');
        cy.get('.facilAchar').should('contain', 'Cuidado');
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...');
    })

    it('Links', () => {
        cy.get('a').click();
        cy.get('#resultado').should('have.text', 'Voltou!');
        
        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!');
        cy.contains('voltar').click();
        cy.get('#resultado').should('have.text', 'Voltou!');
    })

    it.only('TextFields', () => {
        cy.get('#formNome').type('Cypress Test');
        cy.get('#formNome').should('have.value', 'Cypress Test');

        cy.get('#elementosForm\\:sugestoes')
            .type('Test')
            .should('have.value', 'Test');

        cy.get('#tabelaUsuarios > :ntn-child(2) > :ntn-child(1) > :ntn-child(6) > input')
            .type('???');

        cy.get('[data-cy=dataSobrenome]')
            .type('Teste12345{backspace}{backspace}')
            .should('have.value', 'Teste12345');

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto', {delay:100})
            .should('have.value', 'acerto');
    })

    it('RadioButton', () => {
        cy.get('#formSexoFem')
            .click()
            .should('be.checked');

        cy.get('#formSexoMasc')
            .should('not.be.checked');

        cy.get("[nome=formSexo]")
            .should('have.lenght', 2);

    })

    it('Checkbox', () => {
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked');

        cy.get('[name=formComidaFavorita]')
            .click({multiple:true});

        cy.get('#formComidaPizza')
            .should('be.checked');

        cy.get('#formComidaPizza')
            .should('not.be.checked');

    })

    it('ComboBox', () => {

        cy.get('[data-test=dataEscolaridade]')
            .select('2o grau completo')
            .should('have.value', '2graucomp');
        
        cy.get('[data-test=dataEscolaridade]')
            .select('1graucomp')
            .should('have.value', '1graucomp');

        //TODO validar opções do combo
    })

    it('ComboMulti', () => {

        cy.get('[data-testid=dataEsportes]')
            .select(['natacao', 'Corrida', 'nada'])


        //TODO validar opções do combo multiplo
    })

    describe('Work with basic elements', () => {
    
        before(() => {
            cy.visit('https://wcaquino.me/cypress/frame.html');
        })
    
        it('externo', () => {
    
        })

    })
})

