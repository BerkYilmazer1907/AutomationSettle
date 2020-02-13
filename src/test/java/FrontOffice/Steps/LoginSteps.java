package FrontOffice.Steps;


import FrontOffice.Page.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.lexer.Th;

public class LoginSteps {

    LoginPage loginPage;

    public LoginSteps(LoginPage loginPage) {
        this.loginPage = loginPage;
    }

    @Given("^I am a \"([^\"]*)\" of SettleGo with twoFactor disabled$")
    public void i_am_a_of_SettleGo_with_twoFactor_disabled(String user) throws Throwable {
             loginPage.NavigateTo();
             loginPage.SettleLoginPage(user);
    }

    @When("^I log in using valid credentials$")
    public void i_log_in_using_valid_credentials() throws Throwable {
    }

    @Then("^I should directly be logged in$")
    public void i_should_directly_be_logged_in() throws Throwable {
    loginPage.CheckIfLoginSucessful();
    }
}

