describe("FormChecker", () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234");  
    })

    const name = () => cy.get("input[name=text]");
    const email = () => cy.get("input [name=email]");
    const password = () => cy.get("input [name=password]");

    it("sanity check to make sure test work ", ()=> {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({}); 
        })
   





















    })