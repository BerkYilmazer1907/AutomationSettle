package BackOffice.Steps;

import BackOffice.Page.BackOfficePayoutPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BackOfficePayoutSteps {

    BackOfficePayoutPage backOfficePayoutPage;

    public BackOfficePayoutSteps(BackOfficePayoutPage backOfficePayoutPage) {
        this.backOfficePayoutPage = backOfficePayoutPage;
    }

    @When("^Select Client \"([^\"]*)\" and ClientUser \"([^\"]*)\"select Currency \"([^\"]*)\" and select beneficiary \"([^\"]*)\"$")
    public void selectClientAndClientUserSelectCurrencyAndSelectBeneficiary(String ClientID, String ClientUser, String currency, String beneficiary) throws Throwable {
        backOfficePayoutPage.Payout(ClientID,ClientUser,currency,beneficiary);
    }
    @Then("^Succesfully Create PayOut$")
    public void succesfully_Create_PayOut() throws Throwable {
        backOfficePayoutPage.succesfully_Create_Payout();

    }
}
