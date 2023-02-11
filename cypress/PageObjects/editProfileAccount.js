class EditProfileAccount {
    get lastButton(){
        return cy.get('.el-dropdown-link')

    }

    get profileButton(){
        return cy.get('[data-cy="account-profile"] > span > div > .vs-c-site-logo')
    }

    get firstNameInput(){
        return cy.get('.vs-c-settings-section__info > .vs-c-settings-section-form > .el-form > :nth-child(1) > .el-form-item__content > .el-input > .el-input__inner')

    }

    get updateButton(){
        return cy.get('.vs-c-settings-section__info > .vs-c-settings-section-form > .el-form > .vs-u-position-relative > .vs-u-text--left > .vs-c-btn')

    }

    get editProfileErrorAlert(){
        return cy.get('.vs-c-settings-section__info > .vs-c-settings-section-form > .el-form > :nth-child(1) > .vs-c-form-item__error-wrapper > .el-form-item__error')
    }


    editProfile(text){
        this.lastButton.trigger('mouseover').click()
        this.profileButton.click()
        this.firstNameInput.clear().type(text)
        this.updateButton.click()


    }
}
export const editProfileAccount = new EditProfileAccount()