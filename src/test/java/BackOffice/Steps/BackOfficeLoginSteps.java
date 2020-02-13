package BackOffice.Steps;


import BackOffice.Page.BackOfficeLoginPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BackOfficeLoginSteps {

    BackOfficeLoginPage backOfficeLoginPage;

    public BackOfficeLoginSteps(BackOfficeLoginPage loginPage) {
        this.backOfficeLoginPage = loginPage;
    }

    @Given("^User navigates to settlego backoffice website$")
    public void user_navigates_to_settlego_backoffice_website() throws Throwable {
      backOfficeLoginPage.NavigateToBackOffice();
    }

    @When("^\"([^\"]*)\" login to Backoffice$")
    public void loginToBackoffice(String user) throws Throwable {
        backOfficeLoginPage.SettleBackOfficeLoginPage(user);
    }
    @Then("^User can successful login to backoffice$")
    public void userCanSuccessfulLoginToBackoffice() throws Throwable{
        backOfficeLoginPage.CheckIfLoginSucessful();
    }

}


