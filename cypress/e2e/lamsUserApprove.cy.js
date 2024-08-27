describe('user_registration', () => {
    it('passes', () => {
        cy.visit('https://lams.dev.z8.softbd.xyz/');
        cy.get('.css-1yeg3l4').click();
        cy.get('#login-reg-button').click();
        cy.get(':nth-child(2) > a > .MuiPaper-root').click();

        cy.get('#username').type('admin');
        cy.get('#password').type('121212aA')
        cy.get('#kc-login').click()
        
        cy.get('img[src="https://backend-lsg-dev.z8.softbd.xyz/api/file-upload/view-file/8f21f303-64a8-4339-a721-e9ba4c499066.png"]').click(); 
       
        // or .should('be.visible');
        cy.contains('Human Resource').click();
        cy.contains('User').click();


        // Find all div elements with the role of "button" that contain "Approve" as the label

        cy.get('div[role="button"]').each(($el) => {
        // Inside each button, check if it contains a span with the text "Approve"

        cy.wrap($el).find('span.MuiChip-label').then(($span) => {
        if ($span.text().trim() === 'Approve') {
          
        // Scroll the element into view and click it
        cy.wrap($el).scrollIntoView().click({ force: true });
        cy.get('button').contains('Yes').click({ force: true });
              }

            });
          });
      


    })
})