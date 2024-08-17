describe('template spec', () => {
    it('user should be able to log in', () => {
      cy.visit('https://admin.projectrangeet.com/')
      cy.fixture('login').then((data)=>{
        // fill in the form
        cy.get('input[type="email"]').type('yiyidit798@nimadir.com').wait(3000)
        cy.get('input[type="password"]').type('123456').wait(3000)

  // submit the form 
  cy.get('.btn-login').wait(1000).click()
      
      cy.contains('a[title="Reporting Engine"]', 'Reporting Engine').find('span').wait(3000).click()
      cy.contains('a[title="Class Data Report"]', 'Class Data Report').find('span').wait(3000).click()
      cy.wait('@getData'); 
      cy.get('#dropdown-toggle-button').click(); // This might trigger the dropdown to appear
      cy.get('#select2-project_id-xx-container').click({ force: true });
      







     
   
       
})
})
})