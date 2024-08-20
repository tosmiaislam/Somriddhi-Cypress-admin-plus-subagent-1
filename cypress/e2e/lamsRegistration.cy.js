describe('user_registration', () => {
    it('passes', () => {
        const fnamesEng = ['Alice', 'Bob', 'Charlie', 'Diana', 'Edward', 'Fiona'];
        const lnamesBan = ['Khan', 'Hazzaj', 'Man', 'Kabir', 'Jon', 'Chowdhury'];

        cy.visit('https://lams.dev.z8.softbd.xyz/')
        cy.xpath('//button[contains(@class, "MuiButton-outlinedPrimary") and text()="রেজিস্ট্রেশন"]').click();
        cy.xpath('//*[@id="__next"]/div/div[1]/div/div/div[1]/div/div/div/div/div/div/div[2]/div[2]/a/div/p').click();
        cy.get('.css-1yeg3l4').click('')
        const banRandomFname = fnamesEng[Math.floor(Math.random() * fnamesEng.length)];
        cy.get('#\\:r0\\:').should('be.visible').type(banRandomFname);

        // Select a random last name bangla from the array
        const banRandomLname = lnamesBan[Math.floor(Math.random() * lnamesBan.length)];
        cy.get('#\\:r1\\:').type(banRandomLname);

        // Select a random first name english from the array
        const EngRandomFname = fnamesEng[Math.floor(Math.random() * fnamesEng.length)];
        cy.get('#\\:r2\\:').type(EngRandomFname);

        // Select a random last name english from the array
        const EngRandomLname = lnamesBan[Math.floor(Math.random() * lnamesBan.length)];
        cy.get('#\\:r3\\:').type(EngRandomLname);

        // Mobile Number (English)
        const prefix = '017';
        const mobileNumber = prefix + Math.floor(Math.random() * 100000000).toString().padStart(8, '0');
        cy.get('#\\:r4\\:').should('be.visible').type(mobileNumber);

        // Username
        const username = fnamesEng[Math.floor(Math.random() * fnamesEng.length)].toLowerCase();
        cy.get('#\\:r5\\:').type(username);
        // Rank
        const optionValue = 'Office Assistant';

        //1nd dropdown - type select dropdown
        cy.get('input[placeholder="Select Rank"]').click();

        // Step 2: Select an option from the dropdown list
        cy.get('ul[role="listbox"] li').contains('Surveyor').click();
    
        // Optionally assert that the input now has the expected value
        cy.get('input[placeholder="Select Rank"]').should('have.value', 'Surveyor');

        //email- seeding
        const randomEmail = Math.random().toString(36).substring(2,15)+"@gmail.com"
        cy.get('input[placeholder="example@gmail.com"]').should('have.attr', 'placeholder', 'example@gmail.com').type(randomEmail);

        //random phone nid seeding
        const randomNidNumber = '10' + Math.floor(Math.random() * 90000000 + 10000000);
        cy.get('#\\:r7\\:').type(randomNidNumber); 

        //date-month-year selecting
        cy.get('#\\:r8\\:').type('01/01/2000');
        cy.get('#\\:r8\\:').should('have.value', '01/01/2000');

       //2nd dropdown
        cy.get('#\\:ra\\:').click();
        cy.get('ul[role="listbox"] li').contains('Officer').click();
        cy.get('#\\:ra\\:').should('have.value', 'Officer');

        //3rd dropdown
        cy.get('#\\:rc\\:').click();
        cy.get('ul[role="listbox"] li').contains('Permanent').click();
        cy.get('#\\:rc\\:').should('have.value', 'Permanent');

        //4rd dropdown
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
    
        //current JOINING DATE 
        cy.get('#\\:ri\\:').type('01/01/2023');
        cy.get('#\\:ri\\:').should('have.value', '01/01/2023');
        
        //password
        cy.get('#\\:rk\\:').type('121212aA')
        cy.get('#\\:rl\\:').type('121212aA')


    })
})