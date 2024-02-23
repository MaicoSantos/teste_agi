const blogAgiPage = require('./blog_agi_page.js')
const blogAgiPg = new blogAgiPage()

Cypress.Commands.add('pesquisar_conteudo', { timeout: 7000 }, (busca) => {

  cy.get(blogAgiPg.btn_pesquisa)
    .should('be.visible')
    .should('exist')
    .click()

  cy.get(blogAgiPg.input_pesquisa)
    .should('be.visible')
    .should('exist')
    .type(busca+'{enter}')
    
})

Cypress.Commands.add('valida_pesquisa_sucesso', { timeout: 7000 }, (busca) => {

    cy.get(blogAgiPg.titulo_busca)
      .should('be.visible')
      .should('exist')
      .should('contains.text', "Search Results for: " + busca)
  
    cy.get(blogAgiPg.subtitulo_busca)
      .should('be.visible')
      .should('exist')
      .should('contains.text', "Results for " + busca)

    cy.get(blogAgiPg.post)
      .should('be.visible')
      .should('exist')
      .should('contains.text', busca, { matchCase: false })

    cy.get(blogAgiPg.busca_nao_encontrada)
      .should('not.exist')

})

Cypress.Commands.add('valida_pesquisa_nao_encontrada', { timeout: 7000 }, (busca) => {

    cy.get(blogAgiPg.titulo_busca)
      .should('be.visible')
      .should('exist')
      .should('contains.text', "Search Results for: " + busca)
  
    cy.get(blogAgiPg.subtitulo_busca)
      .should('be.visible')
      .should('exist')
      .should('contains.text', "Results for " + busca)

    cy.get(blogAgiPg.busca_nao_encontrada)
      .should('exist')

    cy.get(blogAgiPg.msg_busca_nao_encontrada)
      .should('be.visible')
      .should('exist')
      .should('contains.text', "Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.")

})