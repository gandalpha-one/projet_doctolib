//const { describe } = require("mocha");

before(() => {
    cy.visit("https://www.doctolib.fr/");
})

describe("projet doctolib", () => {
    //it.skip("accédes au mention legal", () => {
     //   cy.get('[class="dl-desktop-navbar-link"]').first().click();
   // })
    it.skip("accédes au mention legal", () => {
        cy.get('#didomi-notice-disagree-button > span').click();
        cy.get('[href="https://doctolib.legal/B2C-legalmentions-FR"]').click();
        cy.wait(5000);
    })
    it.skip('Recherche rapide',() => {
        cy.visit('https://www.doctolib.fr/');
        cy.get('#didomi-notice-agree-button > span')
        .click();
        cy.url()
        .should('eq', 'https://www.doctolib.fr/')
        cy.wait(5000)
        cy.get('[class="searchbar-query"]')
        .type('Médecin généraliste')
        cy.get('.searchbar-result-speciality > .notranslate > :nth-child(2)')
        .click();
        cy.get('[class="searchbar-input searchbar-place-input"]')
        .type('Lille');
        cy.get('#ChIJEW4ls3nVwkcRYGNkgT7xCgQ')
        .click();
        cy.get('[class="searchbar-submit-button-label dl-text-transform-none"]')
        .click();
        cy.url()
        .should('eq', 'https://www.doctolib.fr/medecin-generaliste/lille')
        })

        it("accédes a la section recrutement", () => {
            cy.visit('https://www.doctolib.fr/');
            cy.get('#didomi-notice-disagree-button > span').click();
            cy.get('[class="dl-button-label"]').click();
            cy.wait(5000);
        })

        it("accédes a la section recrutement", () => {
            cy.visit('https://www.doctolib.fr/');
            cy.get('#didomi-notice-disagree-button > span').click();
            cy.get('[class="dl-button-label"]').click();
            cy.wait(5000);
        })
})