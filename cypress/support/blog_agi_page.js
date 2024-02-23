class blogAgiPage {
    constructor() {

        this.btn_pesquisa = "a > span.ast-icon.icon-search"
        this.input_pesquisa = "#search-field"
        this.btn_enviar_pesuqisa = " button[class='search-submit ast-search-submit']"
        this.titulo_busca = ".page-title"
        this.subtitulo_busca = ".rank-math-breadcrumb"
        this.post = ".ast-row"
        this.busca_nao_encontrada = "#main > section.no-results.not-found"
        this.msg_busca_nao_encontrada = ".page-content > p"

    }
}

module.exports = blogAgiPage