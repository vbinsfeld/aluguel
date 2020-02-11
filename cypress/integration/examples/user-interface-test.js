/// <reference types="Cypress" />

const link = "https://seubarriga.wcaquino.me/";
//const link_simulador = "";


context('Automated UI Test: "Seu Barriga', () => {
    
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    })
    
    it('1: Validate Form Screen Layout', () => {
        cy.visit(link_simulador);
        cy.get('body > div.topoPrevidencia > div > div > h1 > a').should('be.visible').and('have.attr', 'href', link_home);
        cy.get('body > div.topoPrevidencia > div > div > div > span:nth-child(1)').should('be.visible').contains('Simulador de');
        cy.get('body > div.topoPrevidencia > div > div > div > span.textoNegrito').should('be.visible').contains('Investimento');        
        cy.get('body > div.blocoTituloSimulador > div > h2').should('be.visible').contains('Simulador de Investimento - Poupança');        
        cy.get('body > div.blocoTituloSimulador > div > p').should('be.visible').contains('Aqui você confere as melhores opções para investir na Poupança Sicredi. Escolha o valor, por quanto tempo deseja aplicar e clique em Simular.');
        cy.get('#formInvestimento > div:nth-child(1) > div').should('be.visible').contains('Informe seu perfil::');
        cy.get('#formInvestimento > div:nth-child(1)').should('be.visible').contains('Para você');
        cy.get('#formInvestimento > div:nth-child(1)').should('be.visible').contains('Para sua empresa ou agronegócio');
        cy.get('#formInvestimento > div:nth-child(2) > div.tituloFormulario').should('be.visible').contains('Qual o valor que você quer aplicar?*');
        cy.get('#formInvestimento > div:nth-child(3) > div.tituloFormulario').should('be.visible').contains('Quanto você quer poupar todo mês?');
        cy.get('#formInvestimento > div:nth-child(4) > div.tituloFormulario').should('be.visible').contains('Por quanto tempo você quer poupar?*');
        cy.get('#formInvestimento > div:nth-child(4) > span').should('be.visible').contains('Digite os caracteres gerados na imagem e clique em enviar');
        cy.get('#formInvestimento > div.simuladorOpcoes.clearfix > ul > li:nth-child(1) > a').should('be.visible').contains('Limpar formulário');
        cy.get('#formInvestimento > div.simuladorOpcoes.clearfix > ul > li.simular > button').should('be.visible').contains('Simular');
    })

    it('2: Validate Results With Valid Data', () => {
        cy.visit(link_simulador);
        cy.get('[value="paraEmpresa"]').click();
        cy.get('#valorAplicar').type('1500000')
        cy.get('#valorInvestir').type('10000')
        cy.get('#tempo').type('12')
        cy.get('.btSelect')
        cy.get('.btSelect > .btn')
        cy.get('.listaSelect > :nth-child(2) > a')
        cy.get('.simular > .btn').click()
        cy.get('body > div.conteudoGeral.conteudoGeralCompleto.clearfix > div > div > div.formularioBloco.formularioBlocoResultado > div > div.blocoResultadoSimulacao').contains('R$ 16.690');
        cy.get('body > div.conteudoGeral.conteudoGeralCompleto.clearfix > div > div > div.formularioBloco.formularioBlocoResultado > div > div.blocoResultadoSimulacao > div.maisOpcoes > table > tbody > tr:nth-child(1) > td:nth-child(1)').contains('24');
        cy.get('body > div.conteudoGeral.conteudoGeralCompleto.clearfix > div > div > div.formularioBloco.formularioBlocoResultado > div > div.blocoResultadoSimulacao > div.maisOpcoes > table > tbody > tr:nth-child(1) > td:nth-child(2)').contains('R$ 18.433')
        cy.get('body > div.conteudoGeral.conteudoGeralCompleto.clearfix > div > div > div.formularioBloco.formularioBlocoResultado > div > div.blocoResultadoSimulacao > div.maisOpcoes > table > tbody > tr:nth-child(2) > td:nth-child(1)').contains('36');
        cy.get('body > div.conteudoGeral.conteudoGeralCompleto.clearfix > div > div > div.formularioBloco.formularioBlocoResultado > div > div.blocoResultadoSimulacao > div.maisOpcoes > table > tbody > tr:nth-child(2) > td:nth-child(2)').contains('R$ 20.231');
        cy.get('body > div.conteudoGeral.conteudoGeralCompleto.clearfix > div > div > div.formularioBloco.formularioBlocoResultado > div > div.blocoResultadoSimulacao > div.maisOpcoes > table > tbody > tr:nth-child(3) > td:nth-child(1)').contains('48');
        cy.get('body > div.conteudoGeral.conteudoGeralCompleto.clearfix > div > div > div.formularioBloco.formularioBlocoResultado > div > div.blocoResultadoSimulacao > div.maisOpcoes > table > tbody > tr:nth-child(3) > td:nth-child(2)').contains('R$ 22.085');
        cy.get('body > div.conteudoGeral.conteudoGeralCompleto.clearfix > div > div > div.formularioBloco.formularioBlocoResultado > div > div.blocoResultadoSimulacao > div.maisOpcoes > table > tbody > tr:nth-child(4) > td:nth-child(1)').contains('60');
        cy.get('body > div.conteudoGeral.conteudoGeralCompleto.clearfix > div > div > div.formularioBloco.formularioBlocoResultado > div > div.blocoResultadoSimulacao > div.maisOpcoes > table > tbody > tr:nth-child(4) > td:nth-child(2)').contains('R$ 23.998');
    })

     it('3: Validate Results Screen Layout', () => {
        //cy.visit(link_simulador);
        cy.get('body > div.conteudoGeral.conteudoGeralCompleto.clearfix > div > div > div.formularioBloco.formularioBlocoResultado > div > div.blocoResultadoSimulacao > span.texto').should('be.visible').contains('Em 12 meses você terá guardado');
        cy.get('body > div.conteudoGeral.conteudoGeralCompleto.clearfix > div > div > div.formularioBloco.formularioBlocoResultado > div > div.blocoResultadoSimulacao > div.maisOpcoes > span').should('be.visible').contains('Veja estas outras opções para você');
    }) 
    
     it('4: Validate Warning For Initial Value < R$ 20,00', () => {
         cy.visit(link_simulador);
         cy.get('[value="paraEmpresa"]').click();
         cy.get('#valorAplicar').type('1900')
         cy.get('#valorInvestir').type('10000')
         cy.get('#tempo').type('24')
         cy.get('.btSelect')
         cy.get('.btSelect > .btn')
         cy.get('.listaSelect > :nth-child(2) > a')
         cy.get('.simular > .btn').click();
         cy.get('#valorAplicar-error').should('be.visible').contains('Valor mínimo de 20.00')
    })

     it('5: Validate Warning For Monthly Contribution Value < R$ 20,00', () => {
        cy.visit(link_simulador);
        cy.get('[value="paraEmpresa"]').click();
        cy.get('#valorAplicar').type('2100')
        cy.get('#valorInvestir').type('1900')
        cy.get('#tempo').type('24')
        cy.get('.btSelect')
        cy.get('.btSelect > .btn')
        cy.get('.listaSelect > :nth-child(2) > a')
        cy.get('.simular > .btn').click();
        cy.get('#valorInvestir-error').should('be.visible').contains('Valor mínimo de 20.00')
    })
    
    it('6: Validate Warning For Period of Contribution Blank', () => {
        cy.visit(link_simulador);
        cy.get('[value="paraEmpresa"]').click();
        cy.get('#valorAplicar').type('2100')
        cy.get('#valorInvestir').type('2100')
        //cy.get('#tempo').type('24')
        cy.get('.btSelect')
        cy.get('.btSelect > .btn')
        cy.get('.listaSelect > :nth-child(2) > a')
        cy.get('.simular > .btn').click();
        cy.get('#tempo-error').should('be.visible').contains('Obrigatório');
    })
    
    it('7: Validate Warning For Initial Value > R$ 9999999,00', () => {
        cy.visit(link_simulador);
        cy.get('[value="paraEmpresa"]').click();
        cy.get('#valorAplicar').type('999999901')
        cy.get('#valorInvestir').type('10000')
        cy.get('#tempo').type('24')
        cy.get('.btSelect')
        cy.get('.btSelect > .btn')
        cy.get('.listaSelect > :nth-child(2) > a')
        cy.get('.simular > .btn').click();
        cy.get('#valorAplicar-error').should('be.visible').contains('Máximo de 9999999.00')
    })

    it('8: Validate Warning For Monthly Contribution Value > R$ 9999999,00', () => {
        cy.visit(link_simulador);
        cy.get('[value="paraEmpresa"]').click();
        cy.get('#valorAplicar').type('2200')
        cy.get('#valorInvestir').type('999999901')
        cy.get('#tempo').type('24')
        cy.get('.btSelect')
        cy.get('.btSelect > .btn')
        cy.get('.listaSelect > :nth-child(2) > a')
        cy.get('.simular > .btn').click();
        cy.get('#valorInvestir-error').should('be.visible').contains('Máximo de 9999999.00')
    })

    it('9: Validate Refazer a Simulação', () => {
        cy.visit(link_simulador);
        cy.get('[value="paraEmpresa"]').click();
        cy.get('#valorAplicar').type('1500000')
        cy.get('#valorInvestir').type('10000')
        cy.get('#tempo').type('12')
        cy.get('.btSelect')
        cy.get('.btSelect > .btn')
        cy.get('.listaSelect > :nth-child(2) > a')
        cy.get('.simular > .btn').click()
        cy.get('.blocoResultadoSimulacao > .btn').click();
        cy.get('#valorAplicar').should('be.visible');
    })
})