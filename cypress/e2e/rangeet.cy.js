describe('template spec', () => {
it('user should be able to log in', () => {
  cy.visit('https://admin.projectrangeet.com/')

  // fill in the form
  cy.get('input[type="email"]').type('yiyidit798@nimadir.com').wait(3000)
  cy.get('input[type="password"]').type('123456').wait(3000)

  // submit the form 
  cy.get('.btn-login').wait(1000).click()


// Scroll down to the footer
cy.scrollTo('bottom', { duration: 10000 })
 
  cy.contains('a[title="Project Management"]', 'Project Management').find('span').wait(3000).click()
    cy.contains('a[title="Project Groups"]', 'Project Groups').find('span').wait(3000).click()
    cy.contains('a[title="Centers"]', 'Centers').find('span').wait(3000).click()
 
  cy.contains('a[title="Curriculum Management"]', 'Curriculum Management').find('span').wait(3000).click()
    cy.contains('a[title="Curriculums"]', 'Curriculums').find('span').wait(3000).click()
    cy.contains('a[title="Umbrellas"]', 'Umbrellas').find('span').wait(3000).click()
      cy.scrollTo('bottom', { duration: 10000 })
    cy.contains('a[title="Modules"]', 'Modules').find('span').wait(3000).click()
    cy.contains('a[title="Lessons"]', 'Lessons').find('span').wait(3000).click()
    cy.contains('a[title="Activities"]', 'Activities').find('span').wait(3000).click()
 
  cy.contains('a[title="Categories"]', 'Categories').find('span').wait(3000).click()

 //cy.get(':nth-child(2) > .has-submenu > span').click()
  cy.contains('a[title="Reporting Engine"]', 'Reporting Engine').find('span').wait(3000).click()
    cy.contains('a[title="Class Data Report"]', 'Class Data Report').find('span').wait(3000).click()
    cy.contains('a[title="BL/EL Report"]', 'BL/EL Report').find('span').wait(3000).click()
    cy.contains('a[title="Iterative Feedback Report"]', 'Iterative Feedback Report').find('span').wait(3000).click()
    cy.contains('a[title="Teacher Feedback Report"]', 'Teacher Feedback Report').find('span').wait(3000).click()
    cy.contains('a[title="Coach Feedback Report"]', 'Coach Feedback Report').find('span').wait(3000).click()
    cy.contains('a[title="Teacher List"]', 'Teacher List').find('span').wait(3000).click()
  
  cy.contains('a[title="Organization Management"]', 'Organization Management').find('span').wait(3000).click()
    cy.contains('a[title="User Management"]', 'User Management').find('span').wait(3000).click()
    cy.contains('a[title="Pending Users"]', 'Pending Users').find('span').wait(3000).click()
  
  cy.contains('a[title="CMS"]', 'CMS').find('span').wait(1000).click()
    cy.contains('a[title="App Contents"]', 'App Contents').find('span').wait(1000).click()
    
  cy.contains('a[title="Communication Tool"]', 'Communication Tool').find('span').wait(1000).click()
    cy.contains('a[title="Chats"]', 'Chats').find('span').wait(1000).click()
    cy.contains('a[title="Notifications"]', 'Notifications').find('span').wait(10000).click()
    cy.contains('a[title="Notice Management"]', 'Notice Management').find('span').wait(1000).click()
    
  cy.contains('a[title="Test Management"]', 'Test Management').find('span').wait(1000).click()
    cy.contains('a[title="Tests"]', 'Tests').find('span').wait(1000).click()
   
  cy.contains('a[title="Subscription Management"]', 'Subscription Management').find('span').wait(1000).click()
    cy.contains('a[title="Invoices"]', 'Invoices').find('span').wait(1000).click()
    cy.contains('a[title="Pending Invoices"]', 'Pending Invoices').find('span').wait(1000).click()
    cy.contains('a[title="Overview Subscription"]', 'Overview Subscription').find('span').wait(1000).click()
    cy.contains('a[title="Overview Additional Subscription"]', 'Overview Additional Subscription').find('span').wait(1000).click()
})

});