describe("Challenges filter test", () => {
  it("Searches after a specific element in the filter section", () => {
    // Ställ in viewport till 1920x1080 (desktop-storlek)
    cy.viewport(1920, 1080);

    cy.visit("/challenges.html");

    cy.get("section.filter").should("exist");

    cy.get("button.filter__button")
      .should("be.visible")
      .and("contain", "Filter challenges")
      .click();

    cy.get("form.filter__form").should("be.visible");

    cy.get("#online-challenges").should("exist");
    cy.get("#on-site-challenges").should("exist");

    cy.get(".filter__rating").should("exist");
    cy.get(".filter__first-rate .star-button").should("have.length", 5);

    cy.get(".filter__tag").should("exist");
    cy.get(".filter__tag button").should("have.length.at.least", 5);

    cy.get("#filter__text")
      .should("exist")
      .and("have.attr", "placeholder", "Start typing to filter");
  });
});
