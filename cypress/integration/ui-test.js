/// <reference types="Cypress" />

const link = "https://seubarriga.wcaquino.me/";


function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

 var value;

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
        cy.get('#email').type(makeid(5) + '@gmail.com');
        value = cy.get('#email').nodeValue;
        cy.get('#senha').type('123');
        cy.get('.btn').click();
        cy.get('.alert').should('be.visible').contains('Usuário inserido com sucesso');
    })

    it('3: Validate Login', () => {
        cy.visit(link);
        cy.get('#email').type(value + '@gmail.com');
        cy.get('#senha').type('123');
        cy.get('.btn').click();
        cy.get('.alert').should('be.visible').contains('Bem vindo')
    })

    it('4: Validate Adicionar Conta', () => {
        cy.visit(link);
        cy.get('#email').type('vitor@gmail.com');
        cy.get('#senha').type('123');
        cy.get('.btn').click();
        cy.get('.dropdown-toggle').click(); 
        cy.get('.dropdown-menu > :nth-child(1) > a').click();
        cy.get('#nome').type('aluguel janeiro');
        cy.get('.btn').click();
        cy.get('.alert').should('be.visible').contains('Conta adicionada com sucesso!')
    })
    
})