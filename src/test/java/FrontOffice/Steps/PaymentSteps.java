package FrontOffice.Steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import FrontOffice.Page.PaymentPage;

public class PaymentSteps {

    PaymentPage paymentPage;

    public PaymentSteps(PaymentPage paymentPage) {

        this.paymentPage = paymentPage;

    }
    @And("^User makes payment with the \"([^\"]*)\" and \"([^\"]*)\"$")
    public void userMakesPaymentWithTheAnd(String currency, String beneficiary) throws Throwable {
        paymentPage.NavigateToPaymentPage();
        paymentPage.PaymentpagE(currency,beneficiary);
    }

    @Then("^Payment should be successful\\.$")
    public void paymentShouldBeSuccessful() {
        paymentPage.CheckIfPaymentSuccessfull();
    }
}
