describe('dropdown handel',()=>{
    it('user can handel dropsown',()=>{
        cy.visit("https://somriddhi.eksheba.gov.bd/");
        cy.contains("Sign Up").wait(1000).click()
        cy.get('#name').should('have.attr', 'placeholder', 'Enter name').type(userID_Alpha());
        cy.get('#phone').should('have.attr', 'placeholder', '01xxxxxxxxx').type(userID_Alpha()+'@gmail.com');
        cy.contains("Register").wait(1000).click()
        cy.get('')
})

})