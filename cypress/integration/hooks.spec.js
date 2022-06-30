describe('teste de hooks', () => {

    before(() => {
        cy.log('Roda antes de todos os testes')
    })

    beforeEach(() => {
        cy.log('Roda antes de cada os testes')
    })

    it('teste #1', () => {
        cy.log('teste #1')
    })

    it('teste #2', () => {
        cy.log('teste #2')
    })

    it('teste #3', () => {
       cy.log('teste #3')
    })

    afterEach(() => {
        cy.log('Roda depois de cada teste')
    })

    after (() => {
        cy.log('Roda antes de todos os testes')
    })
})