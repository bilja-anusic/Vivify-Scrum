/// <reference types="Cypress" />

import { registerPage } from "../PageObjects/registerPage";
const {faker} = require("@faker-js/faker")

describe('Register tests', ()=>{

    beforeEach(()=>{
        cy.visit('/')
    })

    it ("Register with valid credentials",() => {
        registerPage.register(faker.internet.email(), faker.internet.password(),1)
        registerPage.myOrganizationContent.should('exist')
    })

    it("Register with valid credentials with intercept",() => {
        cy.intercept("POST", "https://cypress-api.vivifyscrum-stage.com/api/v2/register").as("registerRequest")
        registerPage.register(faker.internet.email(), faker.internet.password(),1)
        cy.wait("@registerRequest").then((request) => {
            expect(request.response.statusCode).to.eql(200)
        })
    })

    it ("Invalid register test - with invalid email", () => {
        registerPage.register("biljayahoo.com", "12345678", 1)
        registerPage.errorMessage.should('have.text', 'The email field must be a valid email')

    })

    afterEach(() => {
        cy.clearCookies()
    })

})





