// varible declare for User
var Name =  ["test1" , "test2", "test3", "test4", "test5" ]
var UserName = ["Username test1", "Username test2","Username test3", "Username test4" , "Username test5"]
var a = Math.floor((Math.random()* 5))+1;

describe('dropdown handel plus makeing user from admin',()=>{
    it('user can handel dropsown',()=>{
        cy.visit("https://somriddhi.eksheba.gov.bd/");
        //cy.viewport(1520, 1080)
        cy.get('.mb-3 > .form-control').type(' admin@gmail.com').wait(1000)
        cy.get('.mb-0 > .form-control').type('password').wait(1000)
        cy.contains("Log In").wait(1000).click()
        cy.contains('Dashboard').click();
        cy.contains('User Management').click();
        cy.contains('Users').click();
        cy.contains('Add New').click();

        //for name
        var name = Name[a];
        cy.get('#name').should('have.attr', 'placeholder', 'Name').type(name);

        //for user name
        var Username = UserName[a]
        cy.get('#username').should('have.attr', 'placeholder', 'User Name').type(Username);
        
        const randomEmail = Math.random().toString(36).substring(2,15)+"@gmail.com"
        cy.get('#email').should('have.attr', 'placeholder', 'Email').type(randomEmail);

        //random phone number seeding
        const randomPhoneNumber = '01' + Math.floor(Math.random() * 900000000 + 100000000);
        cy.get('#phone').should('have.attr', 'placeholder', 'Phone').type(randomPhoneNumber); 

        cy.get('#password').should('have.attr', 'placeholder', 'Password').type('password');
        cy.get('#password_confirmation').should('have.attr', 'placeholder', 'Confirm Password').type('password');

        //1st dropdown
        cy.get('#user_type_id').select('Sub Agent')

        //2nd dropdown - type select dropdown
        cy.get("textarea[placeholder='Select Roles']").click()
        cy.get("textarea[placeholder='Select Roles']").type('Suba')
        cy.get("textarea[placeholder='Select Roles']").type('{enter}')

        cy.get("button[type='submit']").click()

        })

})