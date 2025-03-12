// Line 2 makes VS Code autocomplete suggestions for the Cypress framework.
/// <reference types="cypress" />

describe("test suite", () => {

    it("checks if page is found and loaded", () => {
        cy.visit("http://localhost:5173/");
    });

    it("checks if it can find a link, named Online challenges", () => {
        cy.visit("http://localhost:5173/");
        cy.get(".introduction__button--online")
            .contains("Online challenges");
    });

    it("clicks on the Online challenges link", () => {
        cy.visit("http://localhost:5173/");
        cy.contains("Online challenges")
            .click();
    });

    it("checks after a specific web element, in Challenges filter", () => {
        cy.viewport(1920, 1080);
        cy.visit("http://localhost:5173/challenges.html/");
        cy.get(".filter__tag")
            .find(":nth-child(3)");
    });

    it("enters The Story page, by clicking on navbar", () => {
        cy.viewport(1920, 1080);
        cy.visit("http://localhost:5173/challenges.html/");
        cy.get(".header__menu")
            .find(":nth-child(3)")
            .find(".header__menu-link")
            .click();
        cy.get(".about__title > h1")
            .should("have.text", "About us");
    });
});