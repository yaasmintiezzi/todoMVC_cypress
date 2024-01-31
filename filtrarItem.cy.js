import telaInicial from '../support/pageObjects/tela-inicial.pageObjects'

describe('Validar os filtros da aplicação após adição de itens', () => {
    /**
    * DADO - BEFORE -> ANTES DO PRIMEIRO TESTE
    * BEFORE EACH -> ANTES DE CADA TESTE
    */
    beforeEach(()=>{
        cy.visit('/')
        var todoItens = ["Ana Júlia", "Ana Clara", "Maria Júlia"]

    /**E */    
        todoItens.forEach(function(item,indice,array){
            telaInicial.inputText(item)
        }) 
    /**QUANDO */    
         telaInicial.concluirItem()

})

    /**ENTÃO */
    /**clicar no filtro 
     * o item deve ser exibido
     * e o contador deve bater com a informação
    */
    it('Filtrar itens ativos', () => {
       telaInicial.filtrarItem("Active")
     });
    
    it.skip('Filtrar itens inativos', () => {
        
    });    


});
