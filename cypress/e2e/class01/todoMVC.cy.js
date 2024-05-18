/*
  Feature (gherking) -> describe
  background -> contexo ou beforeach
  it -> caso de teste
*/

import telaInicial from "../../support/pageObjects/tela-inicial.page"

describe('Acessar página todo MVC', () => {
  it('Abrir site', () => {
    cy.visit('https://todomvc.com/examples/angular/dist/browser/#/all', { timeout: 5000 })
    // cy.get('input[class="new-todo ng-untouched ng-pristine ng-valid"]').type("Textinho legal.")
    telaInicial.inputText()
  })
})