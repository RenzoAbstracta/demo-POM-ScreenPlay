import Page from './page.page'

// Herencia
class LoginPage extends Page {

    // Web elements
    get usernameField() { return $('#username') }
    get passwordField() { return $('#password') }
    get submitBtn() { return $('button[type="submit"]') }
    get logoutBtn() { return $('button[type="logOut"]')}
    get loginResult() { return $('h1') }

    async open() {
        // Funcionalidad heredada
        await super.open('login')
    }

    // Funcionalidad propia
    async logIn(username, password) {
        await usernameField.clearAndSendKeys(username)
        await passwordField.clearAndSendKeys(password)
        await submitBtn.click()
    }

    async logOut() {
        await logoutBtn.click()
    }
}

// Exportar una instancia
export default new LoginPage()