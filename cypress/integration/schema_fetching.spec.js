/// <reference types="Cypress" />

import "../../dist/index";

describe("Fetch the schema", () => {
  it("Is able to fetch the schema", () => {
    cy.server();
    cy.mockGraphql({
      fetchSchema: true,
      endpoint: "/graphql",
      operations: {
        IntrospectionQuery: {}
      }
    });
    cy.visit("/graphql");
    // cy.wait(2000);
    // cy.contains("Schema").click();
  });
});
