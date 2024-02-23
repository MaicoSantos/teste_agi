/// <reference types="Cypress" />

const busca_sucesso = "Conta"
const busca_inexistente = "123@$!XPTO"

describe('Blog AGI - Testes', () => {

    beforeEach(() => {

        cy.visit('https://blogdoagi.com.br/', {
            onBeforeLoad: (win) => {
                win.sessionStorage.clear()
                win.onerror = null
            }
        })
    })

    afterEach(() => {
        
        cy.screenshot()
    })

    it('Pesquisar conteudo do blog com sucesso', () => {

        cy.pesquisar_conteudo(busca_sucesso)
        cy.valida_pesquisa_sucesso(busca_sucesso)
    });

    it('Pesquisar invalida ou não encontrada', () => {

        cy.pesquisar_conteudo(busca_inexistente)
        cy.valida_pesquisa_nao_encontrada(busca_inexistente)
    });
})