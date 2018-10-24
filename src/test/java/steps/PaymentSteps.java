package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageobject.PaymentPage;

public class PaymentSteps {

    PaymentPage paymentPage;

    public PaymentSteps(PaymentPage paymentPage) {

        this.paymentPage = paymentPage;
    }

    @Then("^Payment islemi basarili olmali\\.$")
    public void payment_islemi_basarili_olmali() throws Throwable {
        paymentPage.CheckIfPaymentSuccessfull();

    }

    @And("^Para birimi \"([^\"]*)\" ve beneficiary \"([^\"]*)\" olan payment yapilir$")
    public void paraBirimiVeBeneficiaryOlanPaymentYapilir(String currency, String beneficiary) throws Throwable {
        paymentPage.NavigateToPaymentPage();
        paymentPage.PaymentpagE(currency, beneficiary);
    }
}
