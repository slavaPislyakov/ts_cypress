describe("My first test", () => {
  it("open google.ru", () => {
    cy.visit("https://google.ru");
    cy.screenshot("Capturing the screenshot after successful login");
    cy.searchCypressInGoogle("Cypress JS", "JavaScript E111111111Testing Framework | cypress.io1111");
  });
});
