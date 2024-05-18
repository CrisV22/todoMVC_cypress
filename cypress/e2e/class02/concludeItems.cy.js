import telaInicial from "../../support/pageObjects/tela-inicial.page"

describe('Add items into my ToDo list', () => {
  beforeEach(()=> {
    cy.visit('/')

    // ADDING ITEMS
    var toDoItems = ['Apple','Banana','Carrot']

    toDoItems.forEach(function(item, index, array) {
      telaInicial.inputToDo(item)
    })
  })

  it('Conclude first item', () => {
    telaInicial.concludeItem()
  })
})
