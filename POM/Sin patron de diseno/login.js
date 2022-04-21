/***
 * Tests login feature
 */

class Login {

  async testLoginPositive() {

    //Abrir pagina de login
    await browser.url('login');

    // Ingresar las credenciales
    $('#username').sendKeys("myUsername");
    $('#password').sendKeys("correctPassword");
    $('button[type="submit"]').click();

    // Verifica que el login fue satisfactorio
    $("h1").isDisplayed();
    assertThat($("h1").getText(), is("Hello myUsername"));
    await expect($("h1")).toHaveText('You logged into a secure area!')
  }

  async testLoginNegative() {

    //Abrir pagina de login
    await browser.url('login');

    // Ingresar las credenciales
    $('#username').sendKeys("myUsername");
    $('#password').sendKeys("wrongPassword");
    $('button[type="submit"]').click();

    // Verifica que el login fue satisfactorio
    $("h1").isDisplayed();
    assertThat($("h1").getText(), is("Hello userName"));
    await expect($("h1")).toHaveText('You logged into a secure area!')
  }

}