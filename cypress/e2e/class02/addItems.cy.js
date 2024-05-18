import telaInicial from "../../support/pageObjects/tela-inicial.page"

describe('Add items into my ToDo list', () => {
  // INITIAL CONDITIONS
  beforeEach(()=> {
    cy.visit('/')
  })

  it('Add an item to the list', () => {
    // const baseUrl = Cypress.config('baseUrl'); // Can be improved by following: https://filiphric.com/cypress-basics-using-baseurl
    telaInicial.inputToDo("Cristian Oliveira")
  })

  it('Add more items to the list', () => {
    var toDoItems = ['Apple','Banana','Carrot']

    toDoItems.forEach(function(item, index, array) {
      telaInicial.inputToDo(item)
    });
  })
})
