import telaInicial from '../support/pageObjects/tela-inicial.pageObjects'

describe('Concluir itens na minha lista de toDo', () => {
    /**
    * DADO - BEFORE -> ANTES DO PRIMEIRO TESTE
    * BEFORE EACH -> ANTES DE CADA TESTE
    */
    beforeEach(()=>{
        cy.visit('/')
        var todoItens = ["Ana Júlia", "Ana Clara", "Maria Júlia"]

        todoItens.forEach(function(item,indice,array){
            telaInicial.inputText(item)
    }) 
})

    it('Concluir um item na lista de toDo', () => {
       telaInicial.concluirItem()
 
        })
    });
