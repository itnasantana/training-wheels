

it('deve marcar os top 5 filmes da marvel', function() {

cy.visit ('https://training-wheels-qaninja.herokuapp.com/checkboxes')
cy.get('input[name=ironman]')
.click()

})