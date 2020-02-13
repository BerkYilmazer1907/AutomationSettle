package FrontOffice.Steps;

import FrontOffice.Page.PaymentPage;
import FrontOffice.Page.TransferPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class TransferSteps {

    TransferPage transferPage;

    public TransferSteps(TransferPage transferPage) {

        this.transferPage = transferPage;
    }
    @When("^User select a \"([^\"]*)\" with the existing \"([^\"]*)\"$")
    public void userSelectAWithTheExisting(String currency, String beneficiary) throws Throwable {
        transferPage.NavigateToPaymentPage();
        transferPage.Transfer(currency,beneficiary);

    }

    @Then("^Transfer message should be displayed$")
    public void transfer_message_should_be_displayed() throws Throwable {
        transferPage.CheckIfTransferSuccessfull();
    }

}
