describe("Booking functionality.", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);

    cy.visit("challenges.html");
  });

  it("Shows error message when trying to book without selecting a date.", () => {
    cy.get(".room__button--onsite").first().click();

    cy.get(".modal__content").should("be.visible");

    cy.get(".modal__button").contains("Search available times").click();

    cy.get(".modal__date_error_text")
      .should("be.visible")
      .and("contain", "No date selected");
  });

  it("Completes the entire booking process", () => {
    cy.get(".room__button--onsite").first().click();

    cy.get(".modal__content").should("be.visible");

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateString = tomorrow.toISOString().split("T")[0];
    cy.get(".modal__input[type='date']").type(dateString);

    cy.get(".modal__button").contains("Search available times").click();

    cy.get(".Bookroom_modal").should("be.visible");
    cy.get(".modal__title2").should("contain", "(step 2)");

    cy.get("#name-text").type("Rikard Engström");
    cy.get("#email-text").type("test@gmail.com");
    cy.get("#phone-number").type("0730123456");

    cy.get("#time_options").should("be.visible");

    cy.get("#participants_number").should("be.visible");

    cy.get(".booking_button").click();

    cy.get(".modal3").should("be.visible");
    cy.get(".modalTitle").should("contain", "Thank you!");
    cy.get(".challengesLink").should("contain", "Back to challenges");

    cy.get(".challengesLink").click();

    cy.url().should("include", "challenges.html");

    cy.get("section.filter").should("exist");
    cy.get("#challenges__container").should("exist");
  });
});
