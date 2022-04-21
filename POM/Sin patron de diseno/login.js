/***
 * Tests login feature
 */
  class Login {

    async testLogin() {
      // Ingresar las credenciales
      $('#username').sendKeys("userName");
      $('#password').sendKeys("my supersecret password");
      $('form button[type="submit"]').click();
  
      // Verifica que el login fue satisfactorio
      $("h1").isDisplayed();
      assertThat($("h1").getText(), is("Hello userName"));
      await expect($("h1")).toHaveText('You logged into a secure area!')
    }
    
  }