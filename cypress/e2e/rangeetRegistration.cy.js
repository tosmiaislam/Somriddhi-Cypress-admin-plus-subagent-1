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
 
