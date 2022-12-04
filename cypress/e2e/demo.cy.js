context("Demo Test", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/actions");
  });

  //Kiểm tra tất cả thẻ H1
  it("Kiem tra xem H1 có đúng text hay không nef ", () => {
    cy.get("h1").should("contain.text", "Actions");
  });

  it("Kiem tra xem thẻ P có đúng text hay không ", () => {
    cy.get(".banner")
      .find(".container")
      .first()
      .find("p")
      .should(
        "contain.text",
        "Examples of actions being performed on DOM elements in Cypress, for a full reference of commands, go to docs.cypress.io"
      );
  });

  it("Kiem tra xem thẻ P có tồn tại hay không ", () => {
    cy.get(".banner").find(".container").first().find("p").should("exist");
  });

  it("Kiểm tra trong một section sẽ ứng với bao nhiêu element ", () => {
    cy.get(".container")
      .eq(2)
      .within(() => {
        cy.get("h4").should("exist");
        cy.get("p").should("exist");
        cy.get("pre").should("exist");
      });
  });

  //Kiểm tra click UI
  it("Test click vào canvas", () => {
    cy.get("#action-canvas")
      .click(80, 75)
      .click(170, 75)
      .click(80, 165)
      .click(100, 185)
      .click(125, 190)
      .click(150, 185)
      .click(170, 165);
  });
});
