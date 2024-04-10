class LoginPage{

    getEmail(){
        return 'input[type="email"]'
    }
    getPassword(){
        return 'input[type="password"]'
    }

    getSigninButton(){
        return 'button[type="submit"]'
    }

    enterEmail(emailValue){
        cy.get(this.getEmail()).type(emailValue)
    }

    enterPassword(passwordValue){
        cy.get(this.getPassword()).type(passwordValue)
    }

    clickSigninButton(){
        cy.get(this.getSigninButton()).click()
    }
}

export default LoginPage