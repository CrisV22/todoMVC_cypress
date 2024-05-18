import telaInicial from "../../support/pageObjects/tela-inicial.page"

describe(('To do app regression test'), () => {
    context('Validate initial screen', () => {
        beforeEach(() => {
            cy.visit('/')
            
        })

        it('Validate input label', () => {
            telaInicial.validateLabel("What needs to be done?")
        });
    })
    
    context('Validate items addition', () => {
        beforeEach(() => {
            cy.visit('/')
            
        })
        it('Add more items to the list', () => {
            var toDoItems = ['Apple','Banana','Carrot']
        
            toDoItems.forEach(function(item, index, array) {
              telaInicial.inputToDo(item)
            })

            /*
            * Validating remaining ToDos are equal to 3
            */

            telaInicial.validateCounter(3)
          })
    })
    
    context('Validate items conclusion', () => {
        beforeEach(() => {
            cy.visit('/')

            // Add more items to the list
            var toDoItems = ['Apple','Banana','Carrot']
        
            toDoItems.forEach(function(item, index, array) {
              telaInicial.inputToDo(item)
            })
        })

        it('Conclude first item', () => {
            telaInicial.concludeItem()
            // Validating remaining ToDos are equal to 2
            telaInicial.validateCounter(2)
        })
    })
    
    context('Validate items filters', () => {
        beforeEach(()=> {
            cy.visit('/')
            var toDoItems = ['Apple','Banana','Carrot']
        
            toDoItems.forEach(function(item, index, array) {
              telaInicial.inputToDo(item)
            })
        
            telaInicial.concludeItem()
          })
        
          it('Filter active items', () => {
            telaInicial.filter("Active")
            telaInicial.validateSizeToDo(2)
          })

          it('Filter completed items', () => {
            telaInicial.filter("Completed")
            telaInicial.validateSizeToDo(1)
          })
    })
    
    context('Validate items deletion', () => {
        beforeEach(()=> {
            cy.visit('/')
            var toDoItems = ['Apple','Banana','Carrot']
        
            toDoItems.forEach(function(item, index, array) {
              telaInicial.inputToDo(item)
            })
          })
        
          it('Delete active item', () => {
            telaInicial.delete()
            telaInicial.validateSizeToDo(2)
          })
    })
})