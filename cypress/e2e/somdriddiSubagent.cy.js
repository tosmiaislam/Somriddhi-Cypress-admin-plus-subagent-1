describe('dropdown handel',()=>{
    it('user can handel dropsown',()=>{
        cy.visit("https://somriddhi.eksheba.gov.bd/");    
        cy.get('.mb-3 > .form-control').type(' tosmiaislam1@gmail.com').wait(3000)
        cy.get('.mb-0 > .form-control').type('password').wait(3000)
        cy.contains("Log In").wait(3000).click()

        cy.contains('Dashboard').click();

        cy.contains('Pay Bill').click();

        //1st dropdown
        cy.contains('Utility').click()
        cy.contains('Electricity').click()
        cy.get(".nesco postpaid']").click()

       // cy.get("textarea[placeholder='Select Roles']").type('Suba')
        //cy.get("textarea[placeholder='Select Roles']").type('{enter}')
    
    })

    })