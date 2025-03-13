// Line 2 makes VS Code autocomplete suggestions for the Cypress framework.
/// <reference types="cypress" />

describe("G-nivå", () => {

    it("checks if page is found and loaded", () => {
        cy.visit("http://localhost:5173/");
    });

    it("checks if it can find a link, named Online challenges", () => {
        cy.visit("http://localhost:5173/");
        cy.get(".introduction__button--online")
            .contains("Online challenges") 
            // contains is used instead of should because of syntax errors
            // caused by Prettier extension in HTML-file.
    });   
});

describe("VG-nivå", () => {

     it("clicks on the Online challenges link", () => {
        cy.visit("http://localhost:5173/");
        cy.contains("Online challenges")
            .click();
    });

    it("checks after a specific web element, in Challenges filter", () => {
        cy.viewport(1920, 1080);
        cy.visit("http://localhost:5173/challenges.html")
        cy.get(".filter__tag")
            .find(":nth-child(3)");
    });

    it("navigating to different pages, by clicking on navbar links", () => {
        cy.viewport(1920, 1080);
        cy.visit("http://localhost:5173/challenges.html");

        cy.get(".header__menu")
            .find(":nth-child(3)")
            .find(".header__menu-link")
            .click();
        cy.get(".about__title > h1")
            .should("have.text", "About us");
        
        cy.get(".header__title")
            .click()
        cy.get(".content__heading")
            .should("have.text", "Popular challenges right now");
    });

    it("fails a booking process", () => {
        cy.visit("http://localhost:5173/challenges.html");
        cy.get('.room__button--onsite')
            .first()
            .should("have.text", "Book this room")
            .click();
        
        cy.get(".modal__button")
            .click();
        cy.get('.modal__date_error_text')
            .should("have.text", "No date selected");
    });

    it("makes a complete booking reservation", () => {
        cy.visit("http://localhost:5173/challenges.html");
        cy.get('.room__button--onsite')
            .first()
            .should("have.text", "Book this room")
            .click();

        const today = new Date().toISOString().split("T")[0];

        cy.get(".modal__input")
            .type(today);
        cy.get(".modal__button")
            .click();

        cy.get("#name-text")
            .type("Nils Nyberg");
        cy.get('#email-text')
            .type("nils@example.com");

        cy.get('#time_options')
            .select(0);
        cy.get('#participants_number')
            .select(0);
        
        cy.get('.booking_button')
            .click();
        cy.get('.challengesLink')
            .click();
    });
});