/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    this.beforeEach(function(){
        cy.visit('./src/index.html');
    });

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', "Central de Atendimento ao Cliente TAT")
    });

    it.only('preenche os campos obrigatórios e envia o formulário', function() {
        const longText = 'Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste,Teste, Teste, Teste, Teste, Teste, Teste'
        cy.get('#firstName').type('Jessyca');
        cy.get('#lastName').type('Viana');
        cy.get('#email').type('jessycaviana@exemplo.com');
        cy.get('#open-text-area').type(longText, { delay: 0 });
        cy.get('button[type="submit"]').click();

        cy.get('.success').should('be.visible');
    });
  });
