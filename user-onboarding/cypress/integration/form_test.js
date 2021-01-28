

describe('OnBoard new User', () => {
     beforeEach(() => {
          cy.visit('http://localhost:3000/')
     })

     const firstNameInput = () => cy.get('[data-cy=firstName]')
     const lastNameInput = () => cy.get('[data-cy=lastName]')
     const emailInput = () => cy.get('[data-cy=email]')
     const passwordInput = () => cy.get('[data-cy=password]')
     const tosBox = () => cy.get('[data-cy=tos]')

     it('sanity test', () => {
          expect(true).to.equal(true)
     })

     it('verify elements exist', () => {
          firstNameInput().should('exist')
          lastNameInput().should('exist')
          emailInput().should('exist')
          passwordInput().should('exist')
          tosBox().should('exist')
     })

     it('type into first name box', () => {
          
     })
     it('type into first name box', () => {

     })
     it('type into first name box', () => {

     })
     it('type into first name box', () => {

     })
     it('type into first name box', () => {

     })
     it('type into first name box', () => {

     })
     it('type into first name box', () => {

     })

})