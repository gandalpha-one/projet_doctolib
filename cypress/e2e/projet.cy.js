const { beforeEach } = require("mocha");

beforeEach(() => {
  cy.visit("https://www.doctolib.fr/");
});

describe('Suite de tests Doctolib', () => {
    
    it('Recherche par spécialiste',() => {
      cy.visit('https://www.doctolib.fr/');
      cy.get('#didomi-notice-agree-button')
      .click();
      cy.url()
      .should('eq', 'https://www.doctolib.fr/')
      cy.wait(5000)
      cy.get('[class="searchbar-query"]')
      .type('Médecin généraliste')
      cy.get('.searchbar-result-speciality > .notranslate > :nth-child(2)')
      .click();
      cy.get('[class="searchbar-submit-button-label dl-text-transform-none"]')
      .click();
      cy.wait(2000)
      cy.get('.js-dl-doctor-results ').contains('Médecin généraliste')
      })
      
      it('Recherche par Ville',() => {
      cy.visit('https://www.doctolib.fr/');
      cy.get('#didomi-notice-agree-button')
        .click();
        cy.url()
        .should('eq', 'https://www.doctolib.fr/')
        cy.wait(5000)
        cy.get('[class="searchbar-input searchbar-place-input"]')
        .type('Lille');
        cy.get('#ChIJEW4ls3nVwkcRYGNkgT7xCgQ')
        .click();
        cy.get('[class="searchbar-submit-button-label dl-text-transform-none"]')
        .click();
        cy.url()
        .should('eq', 'https://www.doctolib.fr/medecin-generaliste/lille')
        })
        
     it('Recherche par spécialiste ET Ville',() => {
          cy.visit('https://www.doctolib.fr/');
          cy.get('#didomi-notice-agree-button')
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
     
    it('Prendre rdv par disponibilité',() => {      
       cy.visit('https://www.doctolib.fr/medecin-generaliste/lille');
       cy.get('#didomi-notice-agree-button')
      .click();
       cy.url()
       .should('eq', 'https://www.doctolib.fr/medecin-generaliste/lille')
       cy.wait(5000)
       cy.get(':nth-child(1) > .dl-popover-button > .dl-pill > .inline-flex > .dl-text')
      .click();
       cy.get('.dl-overflow-scroll > :nth-child(1) > :nth-child(1)')
       .click();
     })

   it('Récherches fréquentes --> Chirurgien dentiste - Paris',() => {
      cy.visit('https://www.doctolib.fr/');
      cy.get('#didomi-notice-agree-button')
      .click();
      cy.url()
      .should('eq', 'https://www.doctolib.fr/')
      cy.wait(5000)
      cy.get('[data-test="popular_search_links"] > :nth-child(1) > .dl-text')
      .click({ multiple: true });
      cy.url()
      .should('eq','https://www.doctolib.fr/dentiste/paris');
   })
   
   it('Récherches fréquentes --> Médecin généraliste - Paris',() => {
       cy.visit('https://www.doctolib.fr/');
       cy.get('#didomi-notice-agree-button > span')
       .click();
       cy.url()
       .should('eq', 'https://www.doctolib.fr/')
        cy.wait(5000)
        cy.get('[data-test="popular_search_links"] > :nth-child(2) > .dl-text')
        .click();
        cy.wait(5000)
     })
    
     it('Récherches fréquentes --> Pédiatre - Paris',() => {
       cy.visit('https://www.doctolib.fr/');
       cy.get('#didomi-notice-agree-button > span')
       .click();
       cy.url()
       .should('eq', 'https://www.doctolib.fr/')
        cy.wait(5000)
        cy.get('a[href="/pediatre/paris"]')
        .eq(1)
        .click();
        cy.wait(5000)
    })

    it('Recherche un métier inexistant', () => {
        cy.wait(2000);
        cy.visit('https://www.doctolib.fr/')
        cy.wait(2000);
        cy.get('#didomi-notice-disagree-button').click();
        cy.wait(5000);
        cy.get('.searchbar-query-input').type("azqfdqsa")
        cy.wait(5000);
        cy.get('.searchbar-submit-button-label').click();
        cy.wait(5000);
        cy.get('.container').contains("Désolé, nous n'avons trouvé aucun professionnel pour votre recherche"); // ASSERTIONS
        cy.wait(5000);
    })

    it('Recherche dans "Trouvez votre spécialiste"', () => {
        cy.visit('https://www.doctolib.fr/');
        cy.wait(2000);
        cy.get('#didomi-notice-disagree-button').click();
        cy.wait(2000);
        cy.get(':nth-child(2) > [data-test="top_speciality_links"] > :nth-child(5) > .dl-text').click();
        cy.wait(2000);
        cy.get('[data-place-id="ChIJ65oy4wUmw0cRQFFkgT7xCgQ"] ').contains("Ophtalmologue"); // ASSERTIONS
        cy.wait(2000);
        cy.url().should('eq', 'https://www.doctolib.fr/ophtalmologue'); // ASSERTIONS
        
    })

    it("accédes au mention legal", () => {
      cy.visit('https://www.doctolib.fr/');  
      cy.get('#didomi-notice-disagree-button > span').click();
      cy.get('[href="https://doctolib.legal/B2C-legalmentions-FR"]').click();
      cy.wait(5000);
})

    it("accédes a la section recrutement", () => {
        cy.visit('https://www.doctolib.fr/');
        cy.get('#didomi-notice-disagree-button > span').click();
        cy.wait(2000);
        cy.get('.dl-career-text > .Tappable-inactive > .dl-button-label').click();
        cy.wait(2000);
    })

     })
  