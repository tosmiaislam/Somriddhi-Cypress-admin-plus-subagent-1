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
        //cy.get('.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputSizeSmall.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-49drxe');





        //1nd dropdown - type select dropdown
        cy.get('input[placeholder="Select Rank"]').click();

        // Step 2: Select an option from the dropdown list
        cy.get('ul[role="listbox"] li').contains('Surveyor').click();
    
        // Optionally assert that the input now has the expected value
        cy.get('input[placeholder="Select Rank"]').should('have.value', 'Surveyor');

        //email- seeding
        const randomEmail = Math.random().toString(36).substring(2,15)+"@gmail.com"
        cy.get('.css-ihdtdm').should('have.attr', 'placeholder', 'example@gmail.com').type(randomEmail);
       
    })
})