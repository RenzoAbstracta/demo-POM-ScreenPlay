import Page from './page'

// Herencia
class LoginPage extends Page {

    // Web elements
    get username () { return $('#username') }
    get password () { return $('#password') }
    get submitBtn () { return $('form button[type="submit"]') }
    get loginResult () { return $('h1') }

    async open () {
        // Funcionalidad heredada
        await super.open('login')
    }

    // Funcionalidad propia
    async submit () {
        await this.submitBtn.click()
    }

}

// Exportar una instancia
export default new LoginPage()