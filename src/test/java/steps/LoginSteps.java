package steps;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageobject.LoginPage;

public class LoginSteps {

    LoginPage loginPage;

    public LoginSteps(LoginPage loginPage) {
        this.loginPage = loginPage;
    }

    @Given("^User navigates to settlego website$")
    public void userNavigatesToNelevenWebsite() throws Throwable {
        loginPage.NavigateTo();
    }

    @When("^\"([^\"]*)\" login olur$")
    public void loginOlur(String kullanici) throws Throwable {
        loginPage.SettleLoginPage(kullanici);
    }

    @Then("^Kullanici basarili bir sekilde login olmus olmali$")
    public void kullaniciBasariliBirSekildeLoginOlmusOlmali() throws Throwable {
        loginPage.CheckIfLoginSucessful();

    }
}
