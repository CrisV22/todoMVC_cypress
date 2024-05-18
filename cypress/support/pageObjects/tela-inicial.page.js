const elem = require('../elements/tela-inicial.elements').ELEMENTS
const comp = require('../elements/tela-inicial.elements').COMPONENTS
const filter = require('../elements/tela-inicial.elements').FILTERS

// const inputTo = 'input[class="new-todo ng-pristine ng-valid ng-touched"]';

class telaInicial {
    inputToDo(data) {
        cy.get(elem.inputToDo)
        .type(data)
        .type('{enter}')
    }

    concludeItem() {
        cy.get(comp.buttonConcludeItem)
        .first()
        .click()
    }

    filter(option) {
        cy.get(filter.filter)
        .contains(option)
        .and('be.visible')
        .click()
    }

    delete() {
        cy.get(comp.deleteButton)
        .first()
        .find('button')
        .invoke('show')
        .click()
    }

    validateLabel(text) {
        cy.get(elem.inputToDo)
        .should('have.attr', 'placeholder')
        .and('include', text)
    }

    validateCounter(num) {
        cy.get(filter.counter)
        .find('strong')
        .should('have.text', num)
    }

    validateSizeToDo(size) {
        cy.get(comp.itemToDo)
        .should('have.length', size)
    }
}

export default new telaInicial();