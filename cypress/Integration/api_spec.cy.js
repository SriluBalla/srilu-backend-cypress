describe("Testing API Endpoints Using Cypress", () => {

    it("Test GET Request", () => {
          cy.request("http://localhost:3000/api/posts/1").then((response) => {
            expect(response.body).to.have.property('code', 200);
          })
    })
})