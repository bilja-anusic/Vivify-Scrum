
class RegisterPage {

    get signUpButton(){
        return cy.get('[data-cy="login-sign-up-link"]')
    }

    get freeSignUpButton() {
        return cy.get('.vsp-c-pricing-plan-list--annual > :nth-child(1) > .vsp-c-btn')
    }

    get emailInput() {
        return cy.get('[data-cy="sign-up-email-input"]')
    }

    get passwordInput() {
        return cy.get('[type="password"]')
    }

    get numOfUsers() {
        return cy.get('.el-input > [data-cy="sign-up-number-of-users-input"]')
    }
    
    get checkAgree() {
        return cy.get('.vs-c-checkbox-check')
    }

    get startBtn() {
        return cy.get('[data-cy="sign-up-submit-button"]')
    }

    get myOrganizationContent(){
        return cy.get('.vs-c-my-organization__content')
    }

    get errorMessage(){
        return cy.get(".el-form-item__error.el-form-item-error--top")
    }


    register(email, password, numOfUsers) {
        this.signUpButton.click()
        this.freeSignUpButton.click({force: true})
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.numOfUsers.type(numOfUsers)
        this.startBtn.click()
    }
}
export const registerPage = new RegisterPage ()



