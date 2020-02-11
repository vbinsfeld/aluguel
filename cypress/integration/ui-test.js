/// <reference types="Cypress" />

const link = "https://seubarriga.wcaquino.me/";
//const link_simulador = "";


context('Automated UI Test for "Seu Barriga', () => {
    
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    })
    
    it('1: Validate Login Screen Layout', () => {
        cy.visit(link);
        cy.get('.navbar-brand').should('be.visible').contains('Seu Barriga');
        cy.get('.active > a').should('be.visible').contains('Login');
        cy.get(':nth-child(2) > a').should('be.visible').contains('Novo usuário?'); 
        cy.get(':nth-child(1) > label').should('be.visible').contains('Email');
        cy.get(':nth-child(2) > label').should('be.visible').contains('Senha');
        cy.get('.btn').should('be.visible').contains('Entrar');
    })

    it('2: Validate Cadastro', () => {
        cy.visit(link);
        cy.get(':nth-child(2) > a').click(); 
        cy.get('#nome').type('vitor');
        cy.get('#email').type('vitoor@gmail.com');
        cy.get('#senha').type('123');
        cy.get('.btn').click();
    })
    
})