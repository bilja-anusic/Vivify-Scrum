

class LoginPage {


    get emailInput() {
    return cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner')
    }

    get passwordInput() {
        return cy.get('[type="password"]')
    }

    get loginButton() {
        return cy.get('.vs-u-text--left > .vs-c-btn')
    }

    get errorAlert() {
        return cy.get('.vs-c-custom-errors > .el-form-item__error')
    }

    login(email, password) {
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.loginButton.click()
    }
}

export const loginPage = new LoginPage()