/// <reference types="Cypress" />

import { loginPage } from "../PageObjects/loginPage"
import { addNewProject } from "../PageObjects/addNewProject"

describe('Add New Project tests', ()=>{

    beforeEach(()=>{
        cy.visit('/')
        loginPage.login('bilja@yahoo.com', 'biljabilja123')
        
    })

    it ("Add new projects",() => {
        cy.intercept("POST", "https://cypress-api.vivifyscrum-stage.com/api/v2/organizations/24271/projects").as("newProjectsRequest")
        addNewProject.newProject("noviji test projekat")
        addNewProject.nexButton.click()
        addNewProject.nexButton.click()
        cy.wait("@newProjectsRequest").then((req) => {
            expect(req.response.statusCode).to.eql(201)
        })
        
    })

    it ("Add new projects without project name - neg.test",() => {
        addNewProject.newProject(" ")
        addNewProject.nexButton.should('be.disabled')
    })

    afterEach(() => {
        cy.clearCookies()
    })
})

