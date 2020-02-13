package FrontOffice.Steps;

import FrontOffice.Page.StandingOrderPage;
import FrontOffice.Page.TransferPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StandingOrderSteps {

    StandingOrderPage standingOrderPage;

    public StandingOrderSteps(StandingOrderPage standingOrderPage) {

        this.standingOrderPage = standingOrderPage;

    }
    @When("^User makes payment with the \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_makes_payment_with_the_and_and(String currency, String beneficiary, String paymentschedule) throws Throwable {
        standingOrderPage.NavigateToPaymentPage();
        standingOrderPage.StandingOrder(currency,beneficiary,paymentschedule);

    }

    @Then("^Payment Scheduled message should be displayed$")
    public void payment_Scheduled_message_should_be_displayed() throws Throwable {
        standingOrderPage.CheckIfStandingOrderSuccessfull();
        }
}


