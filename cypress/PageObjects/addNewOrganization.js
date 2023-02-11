class AddNewOrganization {
    get addNewOrganizationField(){
        return cy.get('.vs-c-my-organization--add-new')
    }

    get organizationNameInput(){
        return cy.get('input')
    }

    get nexButton(){
        return cy.get('[name="next_btn"]')
    }

    get createButton(){
        return cy.get('[name="next_btn"]')
    }

    newOrganization(text){
        this.addNewOrganizationField.click()
        this.organizationNameInput.type(text)
        this.nexButton.click()
        this.createButton.click()
    }
}

export const addNewOrganization = new AddNewOrganization()