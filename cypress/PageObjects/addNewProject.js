class AddNewProject {
    get firstButton(){
        return cy.get('.vs-c-site-sign')
    }

    get addNewProjectButton(){
        return cy.get('.vs-c-my-organization__project-new')
    }

    get projectNameInput(){
        return cy.get('.vs-input-border > input')
    }

    get nexButton(){
        return cy.get('[name="next_btn"]')
    }

    newProject(text){
        this.addNewProjectButton.click()
        this.projectNameInput.type(text)
    }
}
export const addNewProject = new AddNewProject()