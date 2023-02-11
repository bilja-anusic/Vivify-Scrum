/// <reference types="Cypress" />


import { loginPage } from "../PageObjects/loginPage"
import { boardPage } from "../PageObjects/boardPage"

describe('Add board tests', ()=>{

    beforeEach(()=>{
        cy.visit('/')
        loginPage.login('bilja@yahoo.com', 'biljabilja123')
        
    })

    it("Add board test",() => {
        cy.intercept("POST", "https://cypress-api.vivifyscrum-stage.com/api/v2/boards").as("createBoardRequest")
        boardPage.addNewBoard("Novi test board")
        cy.wait("@createBoardRequest").then((req) => {
            expect(req.response.statusCode).to.eql(201)
        })
    })

   

    it("Edit board test",() => {
        cy.intercept("POST", "https://cypress-api.vivifyscrum-stage.com/api/v2/boards").as("createBoardRequest")
        boardPage.addNewBoard("Novi test board")
        cy.wait("@createBoardRequest").then((req) => {
            expect(req.response.statusCode).to.eql(201)
            let boardID = req.response.body.id 
            
            cy.intercept("PUT", "https://cypress-api.vivifyscrum-stage.com/api/v2/boards/" + boardID).as("editBoardRequest")
            boardPage.editBoard("izmenjeni board")
            cy.wait("@editBoardRequest").then((req) => {
                expect(req.response.statusCode).to.eql(200)
            })
        })
    })

    it.only("Edit board test - without board title, negativ test",() => {
        cy.intercept("POST", "https://cypress-api.vivifyscrum-stage.com/api/v2/boards").as("createBoardRequest")
        boardPage.addNewBoard("Negativni test board")
        cy.wait("@createBoardRequest").then((req) => {
            expect(req.response.statusCode).to.eql(201)
            let boardID = req.response.body.id 
        
            boardPage.editBoard(" ")
            boardPage.boardErrorAlert.should('have.text', 'The board title field is required')
        })
    })

    
    it("Delete board test",() => {
        cy.intercept("POST", "https://cypress-api.vivifyscrum-stage.com/api/v2/boards").as("createBoardRequest")
        boardPage.addNewBoard("Novi test board")
        cy.wait("@createBoardRequest").then((req) => {
            expect(req.response.statusCode).to.eql(201)
            let boardID = req.response.body.id  
           
            cy.intercept("DELETE", "https://cypress-api.vivifyscrum-stage.com/api/v2/boards/" + boardID).as("deleteBoardRequest")
            boardPage.deleteBoard()
            cy.wait("@deleteBoardRequest").then((req) => {
                expect(req.response.statusCode).to.eql(200)
                
            })
        })
    })

    afterEach(() => {
        cy.clearCookies()
    })

})

