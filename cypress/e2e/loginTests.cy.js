/// <reference types="Cypress" />

import { loginPage } from "../PageObjects/loginPage";
import { editProfileAccount} from "../PageObjects/editProfileAccount"       

describe('Login tests', ()=>{

    beforeEach(()=>{
        cy.visit('/')
    })

    it ("Login with valid credentials",() => {
        loginPage.login('bilja@yahoo.com', 'biljabilja123')
        editProfileAccount.lastButton.should('exist')
    })

    it ('Login with valid credentials with intercept', () => {
        cy.intercept("POST", "https://cypress-api.vivifyscrum-stage.com/api/v2/login").as('validLogin')
        loginPage.login('bilja@yahoo.com', 'biljabilja123')
        cy.wait('@validLogin').then((request) => {
            expect(request.response.statusCode).to.eql(200)
        })
    })

    it ('Login with wrong credentials', () => {
        loginPage.login('bilja@yahoo.co', 'biljabilja123')
        loginPage.errorAlert.should('be.visible')
        loginPage.errorAlert.should('have.text', 'Oops! Your email/password combination is incorrect')
    })

    afterEach(() => {
        cy.clearCookies()
    })
})