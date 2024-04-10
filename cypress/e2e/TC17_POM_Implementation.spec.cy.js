import LandingPage from '../e2e/pages/landingPage'
import LoginPage from '../e2e/pages/loginPage'
import HomePage from '../e2e/pages/homePage'
import SettingsPage from '../e2e/pages/settingsPage'

describe('Page Object Model Test', function(){

    const landingPage = new LandingPage();
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const settingsPage = new SettingsPage();

    beforeEach(function(){
        cy.fixture('conduitLoginData').as('data')
    })
 
    it('Conduit - Valid Credentials',function(){
        cy.visit('https://react-redux.realworld.io/')

        landingPage.clickSigninButton()
        loginPage.enterEmail(this.data.validEmail)
        loginPage.enterPassword(this.data.validPassword)
        loginPage.clickSigninButton()
        homePage.checkYourFeedIsVisible()
        homePage.clickSettingsButton()
        settingsPage.clickLogoutButton()
    })
})