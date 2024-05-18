import telaInicial from "../../support/pageObjects/tela-inicial.page"

describe('Filter added items', () => {
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
  })

})
