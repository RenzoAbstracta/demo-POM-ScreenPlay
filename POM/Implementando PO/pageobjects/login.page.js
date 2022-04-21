import Page from './page.page'

// Herencia
class LoginPage extends Page {

    // Web elements
    get usernameField() { return $('#username') }
    get passwordField() { return $('#password') }
    get submitBtn() { return $('button[type="submit"]') }
    get loginResult() { return $('h1') }

    async open() {
        // Funcionalidad heredada
        await super.open('login')
    }

    // Funcionalidad propia
    async logIn(username, password) {
        await this.usernameField.clearAndSendKeys(username)
        await this.passwordField.clearAndSendKeys(password)
        await this.submitBtn.click()
    }

    async logOut() {
        await super.logoutBtn.click()
    }
}

// Exportar una instancia
export default new LoginPage()