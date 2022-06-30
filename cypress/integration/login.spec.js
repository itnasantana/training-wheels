it('Deve logar com sucesso', function(){

    cy.visit ('https://training-wheels-qaninja.herokuapp.com/login')
    cy.get('#nickId').type('papitorocks')
    cy.get('#passId').type('pwd123')
    cy.get('button[type=submit]').click()

    const bemVindo = 'Olá Papito, bem-vindo ao Orkut'
    const mensagem = 'Em breve você poderá participar de comunidades, adicionar amigos e deixar um Scraps. hahahahah'

    cy.get('h3[class^="title"]').should('have.text', bemVindo)
    cy.get('p[class=subheader]').should('have.text', mensagem)

})

/*it(' Sair do site', function(){

    cy.get(a[class^="button"]).click()
})*/