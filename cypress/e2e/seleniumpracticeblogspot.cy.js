describe('dropdown handel',()=>{
    it('user can handel dropsown',()=>{
        cy.visit("https://seleniumpractise.blogspot.com/search?q=dropdown");
        cy.get('#menu1').click()
        cy.get("a[role='menuitem']").each(function($ele, index, list){
           if ($ele.text()==='JavaScript'){
            cy.log("Found it")
            cy.wrap($ele).click()
            cy.title().should("include", "Automation")

            }else{
                cy.log("current value", $ele.text())
            }
           
        })



    })
})