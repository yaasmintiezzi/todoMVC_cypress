import telaInicial from '../support/pageObjects/tela-inicial.pageObjects'

describe('Adcionar itens na minha lista de toDo', () => {
    /**
    * DADO - BEFORE -> ANTES DO PRIMEIRO TESTE
    * BEFORE EACH -> ANTES DE CADA TESTE
    */
    beforeEach(()=>{
        cy.visit('/')
    }) 

    it('Adcionar um item na lista', () => {
        telaInicial.inputText("Amanda")
    })

    it('Adcionar mais de um item na lista', () => {
       
        var todoItens = ["Ana Júlia", "Ana Clara", "Maria Júlia"]

        todoItens.forEach(function(item,indice,array){
            telaInicial.inputText(item)
        })
    });


});