import LoginPage from '../pageobjects/login.page'

describe('login form', () => {
    it('should deny access with wrong creds', async () => {
        await LoginPage.open()
        await LoginPage.logIn("myUsername","wrongPassword")

        // assertion
        await expect(LoginPage.loginResult).toHaveText('Your credentials are invalid!')
    })

    it('should allow access with correct creds', async () => {
        await LoginPage.open()
        await LoginPage.logIn("myUsername","correctPassword")

        // assertion
        await expect(LoginPage.flash).toHaveText('You logged into a secure area!')
    })
})