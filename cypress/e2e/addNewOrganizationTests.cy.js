/// <reference types="Cypress" />

import { loginPage } from "../PageObjects/loginPage"
import { addNewOrganization } from "../PageObjects/addNewOrganization"
describe('Add New Organization tests', ()=>{

    beforeEach(()=>{
        cy.visit('/')
        loginPage.login('bilja@yahoo.com', 'biljabilja123')
        
    })

    it ("Add new organization",() => {
        cy.intercept("POST", "https://cypress-api.vivifyscrum-stage.com/api/v2/organizations").as("newOrganization")
        addNewOrganization.newOrganization("novija test organizacija")
        cy.wait("@newOrganization").then((req) => {
            expect(req.response.statusCode).to.eql(201)
        })
        
    })

    afterEach(() => {
        cy.clearCookies()
    })
})

