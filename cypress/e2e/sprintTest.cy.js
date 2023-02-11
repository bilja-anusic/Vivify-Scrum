/// <reference types="Cypress" />

import { loginPage } from "../PageObjects/loginPage"
import { sprintPage } from "../PageObjects/sprintPage" 

describe('Sprint tests', ()=>{

    beforeEach(()=>{
        cy.visit('/')
        loginPage.login('bilja@yahoo.com', 'biljabilja123')
        
    })
    it("Sprint create",() => {
        cy.intercept('POST', 'https://cypress-api.vivifyscrum-stage.com/api/v2/boards/*/sprints').as('addSprint')
        sprintPage.addSprint('sprint22')
        cy.wait('@addSprint').then((req)=>{
            expect(req.response.statusCode).to.eql(201)
        })
    })

    it("Sprint edit",() => {
        cy.intercept('POST', 'https://cypress-api.vivifyscrum-stage.com/api/v2/boards/*/sprints').as('addSprint')
        sprintPage.addSprint('sprint232')
        cy.wait('@addSprint').then((req)=>{
            expect(req.response.statusCode).to.eql(201)
            cy.intercept('POST', "https://cypress-api.vivifyscrum-stage.com/api/v2/sprints/*/change-status").as('startSprint')
            sprintPage.startSprint()  
            cy.wait('@startSprint')

            cy.intercept('PUT', "https://cypress-api.vivifyscrum-stage.com/api/v2/sprints/*").as('editSprint')
            sprintPage.editSprint('neki')
            cy.wait('@editSprint').then  ((req)=>{
                expect(req.response.statusCode).to.eql(200)
            })
        })

    })

    it("Sprint delete",() => {
        cy.intercept('POST', 'https://cypress-api.vivifyscrum-stage.com/api/v2/boards/*/sprints').as('addSprint')
        sprintPage.addSprint('sprint232')
        cy.wait('@addSprint').then((req)=>{
            expect(req.response.statusCode).to.eql(201)
            cy.intercept('DELETE', "https://cypress-api.vivifyscrum-stage.com/api/v2/boards/*/sprints/*?deleteTasks=deleteList").as('deleteRequest')
            sprintPage.deleteSprint()  
            cy.wait('@deleteRequest').then  ((req)=>{
                expect(req.response.statusCode).to.eql(200)
            })
        })
    })


    afterEach(() => {
        cy.clearCookies()
    })

})