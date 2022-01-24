declare namespace Cypress {
  interface Chainable<Subject> {
    searchCypressInGoogle(request: string, expectedValue: string): void;
  }
}
