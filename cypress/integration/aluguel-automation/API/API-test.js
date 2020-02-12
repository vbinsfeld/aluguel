/// <reference types="Cypress" />

context('Automated API Test: "Aluguel do Sr. Barriga', () => {
    
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        });
    })
    
        it('Validate API Response', () => {
          const aluguel = cy.request('GET', 'http://aluguel').as('aluguel')
          
          cy.get('@aluguel').should(aluguel => {
            expect(response.body).to.be.an('object');
            expect(response.body.id).to.be.eq(1);

          });

          aluguel
            .its('status')
            .should('be.eql', 200);
        })

})