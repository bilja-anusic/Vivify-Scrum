class BoardPage {
    get addNewButton(){
        return cy.get('.vs-c-list__item:nth-child(1) .not-sortable > .vs-c-list__btn')
    }

    get addBoardButton(){
        return cy.get('li > a')
    }

    get inputBoardTitle(){
        return cy.get('.vs-input-border > input')
    }

    get nexButton(){
        return cy.get('[name="next_btn"]')
    }
   

    get checkScrum(){
        return cy.get(':nth-child(1) > .vs-c-radio > .vs-c-radio-check')
    }

    get settingsButton(){
        return cy.get('[data-cy="board-configuration"] > span > div > .vs-c-site-logo')
        return cy.get('[data-cy="board-configuration"] > span > div > .vs-c-site-logo')
    }

    get boardTitle(){
        return cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner')
    }

    get updateButton(){
        return cy.get('.vs-u-text--left > .vs-c-btn')
    }

    get deleteBoardButton(){
        return cy.get(':nth-child(8) > .vs-c-settings-section > .vs-c-settings-section-form > .vs-c-btn')
    }

    get confirmDeleteButton(){
        return cy.get('.vs-u-text--right > .el-button--success')
    }

    get boardErrorAlert(){
        return cy.get(':nth-child(1) > .vs-c-form-item__error-wrapper > .el-form-item__error')
    }


    addNewBoard(title){
        this.addNewButton.click()
        this.addBoardButton.click()
        this.inputBoardTitle.type(title)
        this.nexButton.click()
        this.checkScrum.click()
        this.nexButton.click()
        this.nexButton.click()
        this.nexButton.click()
        this.nexButton.click()
    }


    editBoard(title){
        this.settingsButton.click()
        this.boardTitle.clear().type(title)
        this.updateButton.click()
    }

    deleteBoard(){
        this.settingsButton.click()
        this.deleteBoardButton.click({force: true})
        this.confirmDeleteButton.click()
    }




}
export const boardPage = new BoardPage()