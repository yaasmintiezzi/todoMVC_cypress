import telaInicial from '../support/pageObjects/tela-inicial.pageObjects'

describe('Deletar os itens da lista', () => {
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
})

    /**ENTÃO */
    /**clicar no filtro 
     * o item deve ser exibido
     * e o contador deve bater com a informação
    */
    it('Exclusão de um item na lista', () => {
       telaInicial.deletarItem()
     });
    
});
