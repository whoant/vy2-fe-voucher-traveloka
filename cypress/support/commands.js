// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("parseXlsx", (inputFile) => {
  return cy.task("parseXlsx", { filePath: inputFile });
});

Cypress.Commands.add("login", (username, password) => {
  cy.visit("https://voucher.votuan.xyz/partner/auth");

  cy.get("select").select("VY03");
  cy.get("select").should("have.value", "VY03");

  cy.get(".btn").click();
  cy.wait(500);

  cy.get("#username").type(username);
  cy.get("#password").type(password);
  cy.get("button").click();
});
