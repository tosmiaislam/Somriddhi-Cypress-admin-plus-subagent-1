describe('It will be registration by otp', () => {
    it('Feciliator registration', () => {
      cy.visit('https://admin.projectrangeet.com/admin/register')
      
      //1st dropdown
      cy.get('#registration_type').select('ORGANIZATION')

      cy.get('#organization_name').type('tosmia')
      cy.get('#name').type("fecilitor")

      //random phone number seeding
      const randomPhoneNumber = '7' + Math.floor(Math.random() * 900000000 + 100000000);
      cy.get('#phone').should('have.attr', 'placeholder', '081234 56789').type(randomPhoneNumber); 
    
      
      
      cy.get('#email').should('have.attr', 'placeholder', 'Email').type("liveauto1@yopmail.com");
    
      
      //2nd dropdown - city select dropdown i gave value no in select(3)

      cy.get('#locale_state', { timeout: 10000 }).should('be.visible');
      cy.get('select[name="locale_state"]').select(3)
        

      cy.get('#organization_type', { timeout: 10000 }).should('be.visible');
      cy.get('select[name="organization_type"]').select(3)


      cy.get('#password').type("123456")
      cy.get('#password-confirm').type("123456")

      cy.get('#continue-button').click()
        

       // Step 8: Wait for the OTP email to arrive and retrieve the OTP
    cy.wait(10000); // Adjust the wait time based on how quickly the email arrives

    cy.request('https://yopmail.com/en/wm')
      .then(html => {
        const otpLine = html.body.match(/.*OTP.*/)
        const blodText = otpLine[0].match(/<p>\d+/)[0]
      }).then(otp =>{
        cy.get('#totp').type(otp)
      })
      cy.url().should('eq', 'https://admin.projectrangeet.com/')
    
      })
    
    })
 
    // cy.get('iframe#ifinbox').then($iframe => {
    //   const $body = $iframe.contents().find('body');
      
    //   // Find and click the first email in the list
    //   cy.wrap($body)
    //     .find('.m')
    //     .first()
    //     .click();
    // });

    // // Wait for the email content to load in the iframe
    // cy.wait(2000); // Adjust this wait time if needed

    // // Switch to the iframe that contains the email content
    // cy.get('iframe#ifmail').then($iframe => {
    //   const $body = $iframe.contents().find('body');

    //   // Extract the OTP from the email content using regex (assuming it's a 6-digit number)
    //   cy.wrap($body)
    //     .contains(/\b\d{6}\b/) // Adjust the regex if your OTP has a different format
    //     .invoke('text')
    //     .then(otp => {
    //       const extractedOtp = otp.match(/\b\d{6}\b/)[0]; // Extract the first 6-digit number found
    //       cy.log('OTP is: ' + extractedOtp);

    //       // Step 9: Use the OTP in the verification process
    //       cy.get('input[name="otp"]').type(extractedOtp);
    //       cy.get('button[type="submit"]').click();
    //     });
    // });
       
    

        



    // // describe('Extract OTP from Yopmail and Complete Registration', () => {
    // //     // Replace 'your-unique-email@yopmail.com' with your actual Yopmail address
    // //     const yopmailEmail = 'your-unique-email@yopmail.com';
      
    // //     it('should register and verify OTP from Yopmail', () => {
    // //       // Visit the registration page
    // //       cy.visit('your-registration-url');
      
    // //       // Fill in the registration form
    // //       cy.get('input[name="email"]').type(yopmailEmail);  // Your Yopmail address used in the registration form
    // //       cy.get('input[name="password"]').type('your-password');
    // //       cy.get('button[type="submit"]').click();
      
    // //       // Wait for a short period to allow email delivery
    // //       cy.wait(10000); // Adjust this as necessary
      
    // //       // Visit Yopmail inbox
    // //       cy.request(`http://www.yopmail.com/en/inbox.php?login=${yopmailEmail.split('@')[0]}`)
    // //         .then((response) => {
    // //           // Yopmail inbox page content
    // //           const inboxHtml = response.body;
      
    // //           // Extract the email link
    // //           const emailLinkMatch = inboxHtml.match(/ifr="(.*?)"/);
    // //           const emailLink = emailLinkMatch ? emailLinkMatch[1] : null;
      
    // //           if (emailLink) {
    // //             // Visit the specific email page
    // //             cy.request(`http://www.yopmail.com/${emailLink}`).then((emailResponse) => {
    // //               const emailHtml = emailResponse.body;
      
    // //               // Extract the OTP using a regex or known pattern
    // //               const otpMatch = emailHtml.match(/\b\d{6}\b/); // Adjust this regex based on the OTP format
    // //               const otp = otpMatch ? otpMatch[0] : null;
      
    // //               if (otp) {
    // //                 // Use the OTP to complete the registration
    // //                 cy.get('input[name="otp"]').type(otp);
    // //                 cy.get('button[type="submit"]').click();
    // //               } else {
    // //                 throw new Error('OTP not found in the email.');
    // //               }
    // //             });
    // //           } else {
    // //             throw new Error('Email not found in the Yopmail inbox.');
    // //           }
    // //         });
    // //     });
    // //   });
      