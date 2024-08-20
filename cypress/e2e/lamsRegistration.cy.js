describe('user_registration', () => {
    it('passes', () => {
        const fnameEng = ['Tosmia'];
        const lnameEng = ['Islam Nishat'];
        const fnameBang = ['তোসমিয়া'];
        const lnameBang = [' ইসলাম নিশাত'];
        const email = `${fnameEng[0].toLowerCase()}@gmail.com`

        cy.visit('https://lams.dev.z8.softbd.xyz/');
        cy.get('.css-1yeg3l4').click();
        cy.get('[href="/registration"] > .MuiButtonBase-root').click();
        cy.get(':nth-child(2) > a > .MuiPaper-root').click();

        const EngRandomFname = fnameEng[Math.floor(Math.random() * fnameEng.length)];
        cy.get('#\\:r2\\:').should('be.visible').type(EngRandomFname);
        // Select a random last name bangla from the array
        const EngRandomLname = lnameEng[Math.floor(Math.random() * lnameEng.length)];
        cy.get('#\\:r3\\:').type(EngRandomLname);
        // Mobile Number (English)

        // Select a random first name bangla from the array
        const BangRandomFname = fnameBang[Math.floor(Math.random() * fnameBang.length)];
        cy.get('#\\:r0\\:').type(BangRandomFname);
        // Select a random last name english from the array
        const BangRandomLname = lnameBang[Math.floor(Math.random() * lnameBang.length)];
        cy.get('#\\:r1\\:').type(BangRandomLname);

        // Mobile Number (English)
        const prefix = '017';
        const mobileNumber = prefix + Math.floor(Math.random() * 100000000).toString().padStart(8, '0');
        cy.get('#\\:r4\\:').should('be.visible').type(mobileNumber);

        // Username
        const username = fnameEng[Math.floor(Math.random() * fnameEng.length)].toLowerCase();
        cy.get('#\\:r5\\:').type(username);

        //Rank dropdown - type select dropdown
        cy.get('input[placeholder="Select Rank"]').click();
        cy.get('ul[role="listbox"] li').contains('Surveyor').click();

        // Email
        cy.get('#\\:r6\\:').type(email);
        cy.get('#\\:r6\\:').should('have.value', email);

        //random phone nid seeding
        const randomNidNumber = '10' + Math.floor(Math.random() * 90000000 + 10000000);
        cy.get('#\\:r7\\:').type(randomNidNumber);

        //date-month-year selecting
        cy.get('#\\:r8\\:').type('01/01/2000');
        cy.get('#\\:r8\\:').should('have.value', '01/01/2000');

        //2nd dropdown- officer
        cy.get('#\\:ra\\:').click();
        cy.get('ul[role="listbox"] li').contains('Officer').click();
        cy.get('#\\:ra\\:').should('have.value', 'Officer');

        //3rd dropdown -  Employment Type
        cy.get('#\\:rc\\:').click();
        cy.get('ul[role="listbox"] li').contains('Permanent').click();
        cy.get('#\\:rc\\:').should('have.value', 'Permanent');

        //4rd dropdown - grade
        cy.get('#\\:rs\\:').click();
        cy.get('ul[role="listbox"] li').contains('1st grade').click();
        cy.get('#\\:rs\\:').should('have.value', '1st grade');

        //5th dropdown - office type
        cy.get('#\\:rq\\:').click();
        cy.get('ul[role="listbox"] li').contains('MINISTRY').click();
        cy.get('#\\:rq\\:').should('have.value', 'MINISTRY');

        //JOINING DATE 
        cy.get('#\\:rg\\:').type('01/01/2023');
        cy.get('#\\:rg\\:').should('have.value', '01/01/2023');

        // //5th dropdown - OFFICE 
        cy.get('#\\:r10\\:').click();
        cy.get('ul[role="listbox"] li').contains('Ministry of Finance').click();
        cy.get('#\\:r10\\:').should('have.value', 'Ministry of Finance');

        //Current Office Joining Date *
        cy.get('#\\:ri\\:').type('01/01/2023');
        cy.get('#\\:ri\\:').should('have.value', '01/01/2023');

        //password
        cy.get('#\\:rk\\:').type('121212aA')
        // retype password
        cy.get('#\\:rl\\:').type('121212aA')

        // Extract the CAPTCHA text
        cy.get('.MuiTypography-root[aria-readonly="true"]').invoke('text').then((captchaText) => {
            // Use the extracted CAPTCHA text in the input field
            cy.get('#\\:rn\\:').type(captchaText);
        });

        //button
        cy.contains('button', 'Create Account').click();
      
    })
})