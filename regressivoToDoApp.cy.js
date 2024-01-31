import telaInicial from '../support/pageObjects/tela-inicial.pageObjects'

describe('Regressivo ToDo App', () => {

    context('Validar a tela inicial',()=>{
        beforeEach(() => {
            cy.visit('/') 
        });

        it('Validar a area label de input de dados', () => {
            telaInicial.validarInput("What needs to be done?")
        });
    })

    context('Validar a adição de itens',()=>{
        beforeEach(() => {
            cy.visit('/') 
        });

        it('Adcionar mais de um item na lista', () => {
       
            var todoItens = ["Ana Júlia", "Ana Clara", "Maria Júlia"]
    
            todoItens.forEach(function(item,indice,array){
                telaInicial.inputText(item)
            })
        });
    })

    context('Validar a conclusão de itens',()=>{
        beforeEach(()=>{
            cy.visit('/')
            var todoItens = ["Ana Júlia", "Ana Clara", "Maria Júlia"]
    
            todoItens.forEach(function(item,indice,array){
                telaInicial.inputText(item)
        }) 
    });

    it('Concluir um item na lista de toDo', () => {
        telaInicial.concluirItem()
         });
})

    context('Validar o filtro da aplicação',()=>{
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

    it('Validar lista de itens ativos', () => {
        telaInicial.filtrarItem("Active")
        //telaInicial.validarListaItens(2)
    });

    it('Validar lista de itens concluídos', () => {
        telaInicial.filtrarItem("Completed")
        //telaInicial.validarListaItens(1)
    });
})

    context('Validar a exclusão de itens',()=>{
        beforeEach(()=>{
            cy.visit('/')
            var todoItens = ["Ana Júlia", "Ana Clara", "Maria Júlia"]
    
        /**E */    
            todoItens.forEach(function(item,indice,array){
                telaInicial.inputText(item)
            }) 
    })

    it('Exclusão de um item na lista', () => {
        telaInicial.deletarItem()
      });
    })

}); 