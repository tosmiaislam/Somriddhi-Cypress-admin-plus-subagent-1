describe('dropdown handel',()=>{
    it('user can handel dropsown',()=>{
        cy.visit("https://somriddhi.eksheba.gov.bd/");
        cy.contains("Sign Up").wait(1000).click()
        cy.get('#name').should('have.attr', 'placeholder', 'Enter name').type("name");
        cy.get('#phone').should('have.attr', 'placeholder', '01xxxxxxxxx').type("01748608637");
        cy.contains("Register").wait(1000).click()
})

})