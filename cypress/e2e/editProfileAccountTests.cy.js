/// <reference types="Cypress" />


import { loginPage } from "../PageObjects/loginPage"
import { editProfileAccount } from "../PageObjects/editProfileAccount"

describe('Edit profile account test', ()=>{

    beforeEach(()=>{
        cy.visit('/')
        loginPage.login('bilja@yahoo.com', 'biljabilja123')
        
    })

    it ("Edit profile account",() => {
            cy.intercept('PUT', 'https://cypress-api.vivifyscrum-stage.com/api/v2/users').as('editProAccount')
            editProfileAccount.editProfile("biljana")
            cy.wait('@editProAccount').then((req)=>{
                expect(req.response.statusCode).to.eql(200)
            })
        })


        it ("Edit profile account - negative test without first name",() => {
            editProfileAccount.editProfile(" ")
            editProfileAccount.editProfileErrorAlert.should('have.text', 'The first name field is required')
        })
        

    afterEach(() => {
        cy.clearCookies()
    })

})

