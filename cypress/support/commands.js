Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
cy.get('#firstName').type('Jessyca');
cy.get('#lastName').type('Viana');
cy.get('#email').type('jessycaviana@exemplo.com');
cy.get('#open-text-area').type('Teste');
cy.contains('button', 'Enviar').click();
})