/// <reference types="cypress" />

describe("Interações", () => {

    const telas = ['iphone-xr', 'ipad-mini', 'iphone-7'] 

    telas.forEach(element => {
        it(`Teste tamanho: ${element}`, () => {
            cy.viewport(element)
            cy.visit('/login')
        })
    });

    it.only('Acessar um site', () => {
        cy.visit('/shop')

        cy.get('.product_wrappers_one')
            .contains('Green Dress For Woman')
            .click()

        cy.get('.links_Product_areas')
            .find('.theme-btn-one')
            .click()

        // cy.get('.thumb a[href="/product-details-one/1"')
        //     .click();

        // cy.get('#product_single_one h3')
        //     .should('be.visible')
        //     .should('have.text', 'Green Dress For Woman');

        // cy.get('#product_single_one .links_Product_areas > a')
        //     .click()
    })

    // Encontrando elementos

    // encontra um elemento
    it('Encontra elemento com get', () => {
        cy.visit('https://automationpratice.com.br')

        cy.get('#top_header')
    })

    // encontra um elemento
    // dentro de outro elemento
    // diminuitndo o escopo com o get
    it('Encontra elemento com find', () => {
        cy.visit('https://automationpratice.com.br')

        cy.get('#top_header')
            .find('.fa-user')
    })

    // encontra um elemento por TEXTO
    // dentro de outro elemento
    // diminuitndo o escopo com o get
    it('Encontra elemento com contains', () => {
        cy.visit('https://automationpratice.com.br')

        cy.get('#top_header')
            .contains('Login')
    })

    // CLICK
    it('Clicar em elemento', () => {
        cy.visit('https://automationpratice.com.br')

        // Clicar normal
        // cy.get('.fa-user')
        //     .click()

        // Clicar duplo
        // cy.get('.fa-user')
        //     .dblclick()

        // Clicar botao direito
        // cy.get('.fa-user')
        //     .rightclick()

        // Clicar por cordenadas
        // cy.get('#top_header')
        //     .click(100, 100, { force: true })

        // Simular o enter
        cy.get('.form-control')
            .type('eduardo@gmail.com{enter}')
    })

    // Select
    it('Clicar em elemento', () => {
        cy.visit('https://automationpratice.com.br/checkout-one')

        cy.get('#country')
            .select('usa')
    })

    // Select
    it('Checkbox ou radio button', () => {
        cy.visit('https://automationpratice.com.br/checkout-one')

        cy.get('#materialUnchecked')
            .check()

        // cy.get('#css')
        //     .check()
    })

})