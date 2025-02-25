describe("Navigation tests", () => {
  beforeEach(() => {
    // Ställ in viewport till desktop-storlek
    cy.viewport(1920, 1080);
    // Besök startsidan
    cy.visit("/");
  });

  it("Navigates from homepage to play online page", () => {
    cy.get("a.header__menu-link")
      .contains("Play online")
      .should("be.visible")
      .click();

    cy.url().should("include", "challenges.html");
  });

  it("Navigates from homepage to play on-site page", () => {
    cy.get("a.header__menu-link")
      .contains("Play on-site")
      .should("be.visible")
      .click();

    cy.url().should("include", "challenges.html");
  });

  it("Can navigate back to homepage from another page", () => {
    cy.get("a.header__menu-link")
      .contains("The story")
      .should("be.visible")
      .click();

    cy.url().should("include", "about.html");

    cy.get("img.header__logo").click();

    cy.url().should("include", "index.html");
  });

  it("Navigates from homepage to The story page", () => {
    cy.get("a.header__menu-link")
      .contains("The story")
      .should("be.visible")
      .click();

    cy.url().should("include", "about.html");
  });
});
