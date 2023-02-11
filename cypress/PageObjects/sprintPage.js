class SprintPage{

    get firstBoard(){
        return cy.get('[data-type="board"]:first-child')
    }

    get addNewSprint(){
        return cy.get('.vs-c-col:last-child.vs-is-empty > .vs-add-new-task')
    }

    get sprintTitle(){
        return cy.get('.el-input__inner')
    }

    get lastSprintColumn(){
        return cy.get('.vs-c-col:nth-last-child(2)')
    }

    get actionMenuButton(){
        return cy.get('.vs-c-col:nth-last-child(2) .vs-u-actions button')
    }

    get deleteButton(){
        return cy.get('.vs-c-dropdown > :nth-child(1)')
    }

    get confirmDeleteButton(){
        return cy.get('.el-button--success')
    }

    get startSprintButton(){
        return cy.get(':nth-child(3) > .vs-c-dropdown-item-column-limit')
    }

    get startButton(){
        return cy.get('.el-button--success')
    }

    get dropdownButton(){
        return cy.get('.el-dropdown > .vs-c-btn')
    }

    get editSprintButton(){
        return cy.get('.el-dropdown-menu > :nth-child(1)')
    }

    get sprintNameInput(){
        return cy.get('.vs-input-border > .el-input > .el-input__inner')
    }

    get saveButton(){
        return cy.get('[name="save-btn"]')
    }


    addSprint(title){
      
        this.firstBoard.click()
        this.addNewSprint.click()
        this.sprintTitle.type(title + "{enter}")
    }

    deleteSprint(){

        this.lastSprintColumn.scrollIntoView()
        this.actionMenuButton.click()
        this.deleteButton.click()
        this.confirmDeleteButton.click()
    }

    startSprint(){
        this.lastSprintColumn.scrollIntoView()
        this.actionMenuButton.click()
        this.startSprintButton.click()
        this.startButton.click()
    }

    editSprint(text){

      
        this.dropdownButton.click()
        this.editSprintButton.click()
    
        this.sprintNameInput.clear().type(text)
        this.saveButton.click()
    
    }
}

export const sprintPage = new SprintPage()