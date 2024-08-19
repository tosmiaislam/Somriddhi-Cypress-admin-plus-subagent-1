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
    
      
      
      cy.get('#email').should('have.attr', 'placeholder', 'Email').type("@yopmail.com");
    
      
      //2nd dropdown - city select dropdown i gave value no in select(3)

      cy.get('#locale_state', { timeout: 10000 }).should('be.visible');
      cy.get('select[name="locale_state"]').select(3)
        


       // cy.get("textarea[placeholder='-- Select One --']").type('ha')
       // cy.get("textarea[placeholder='-- Select One --']").type('{enter}')
    })
    });

        



    // describe('Extract OTP from Yopmail and Complete Registration', () => {
    //     // Replace 'your-unique-email@yopmail.com' with your actual Yopmail address
    //     const yopmailEmail = 'your-unique-email@yopmail.com';
      
    //     it('should register and verify OTP from Yopmail', () => {
    //       // Visit the registration page
    //       cy.visit('your-registration-url');
      
    //       // Fill in the registration form
    //       cy.get('input[name="email"]').type(yopmailEmail);  // Your Yopmail address used in the registration form
    //       cy.get('input[name="password"]').type('your-password');
    //       cy.get('button[type="submit"]').click();
      
    //       // Wait for a short period to allow email delivery
    //       cy.wait(10000); // Adjust this as necessary
      
    //       // Visit Yopmail inbox
    //       cy.request(`http://www.yopmail.com/en/inbox.php?login=${yopmailEmail.split('@')[0]}`)
    //         .then((response) => {
    //           // Yopmail inbox page content
    //           const inboxHtml = response.body;
      
    //           // Extract the email link
    //           const emailLinkMatch = inboxHtml.match(/ifr="(.*?)"/);
    //           const emailLink = emailLinkMatch ? emailLinkMatch[1] : null;
      
    //           if (emailLink) {
    //             // Visit the specific email page
    //             cy.request(`http://www.yopmail.com/${emailLink}`).then((emailResponse) => {
    //               const emailHtml = emailResponse.body;
      
    //               // Extract the OTP using a regex or known pattern
    //               const otpMatch = emailHtml.match(/\b\d{6}\b/); // Adjust this regex based on the OTP format
    //               const otp = otpMatch ? otpMatch[0] : null;
      
    //               if (otp) {
    //                 // Use the OTP to complete the registration
    //                 cy.get('input[name="otp"]').type(otp);
    //                 cy.get('button[type="submit"]').click();
    //               } else {
    //                 throw new Error('OTP not found in the email.');
    //               }
    //             });
    //           } else {
    //             throw new Error('Email not found in the Yopmail inbox.');
    //           }
    //         });
    //     });
    //   });
      