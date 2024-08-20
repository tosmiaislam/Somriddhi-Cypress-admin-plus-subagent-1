describe('user_registration', () => {
    it('passes', () => {

        cy.visit('https://lams.dev.z8.softbd.xyz/');
        cy.get('.css-1yeg3l4').click();
        cy.get('[href="/registration"] > .MuiButtonBase-root').click();
        cy.get(':nth-child(2) > a > .MuiPaper-root').click();

        cy.get('#\\:r0\\:').type('মকবুল');
        cy.get('#\\:r1\\:').type('হোসেন');
        cy.get('#\\:r2\\:').type('mokbul');
        cy.get('#\\:r3\\:').type('hossain');
        cy.get('#\\:r4\\:').type('01811222333');
        cy.get('#\\:r5\\:').type('mokbul2');
        cy.get('input[placeholder="Select Rank"]').click()
        .get('ul[role="listbox"] li').contains('Surveyor').click();
        cy.get('#\\:r6\\:').type('mokbul@softbd.com');
        cy.get('#\\:r7\\:').type('1234567890');        
        cy.get('#\\:r8\\:').type('01/01/2000');
        cy.get('#\\:ra\\:').click();
        cy.get('ul[role="listbox"] li').contains('Officer').click();
        cy.get('#\\:rc\\:').click();
        cy.get('ul[role="listbox"] li').contains('Permanent').click();
        cy.get('#\\:rs\\:').click();
        cy.get('ul[role="listbox"] li').contains('1st grade').click();
        cy.get('#\\:rq\\:').click();
        cy.get('ul[role="listbox"] li').contains('MINISTRY').click();
        cy.get('#\\:rg\\:').type('01/01/2023');
        cy.get('#\\:rg\\:').should('have.value', '01/01/2023');
        cy.get('#\\:r10\\:').click();
        cy.get('ul[role="listbox"] li').contains('Ministry of Finance').click();
        cy.get('#\\:ri\\:').type('01/01/2023');
        cy.get('#\\:rk\\:').type('121212aA');
        cy.get('#\\:rl\\:').type('121212aA');
        cy.get('.MuiTypography-root[aria-readonly="true"]').invoke('text').then((captchaText) => {
        cy.get('#\\:rn\\:').type(captchaText);
        });
        cy.contains('button', 'Create Account').click();
    })
})