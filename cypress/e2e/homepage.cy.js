describe("Hacker Escape Rooms Homepage", () => {
  it("Loads homepage and verify H1-content", () => {
    cy.viewport(1920, 1080);

    cy.visit("/");

    cy.get("body").should("be.visible");

    cy.get("h1.header__title")
      .should("be.visible")
      .and("contain", "Hacker Escape Rooms");
  });
});
