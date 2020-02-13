package FrontOffice.Steps;

import FrontOffice.Page.ConversionPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static FrontOffice.Page.ConversionPage.*;

public class ConversionSteps {
    ConversionPage conversionPage;

    public ConversionSteps(ConversionPage conversionPage) {

        this.conversionPage = conversionPage;
    }

    @When("^User converts money from GBP \"([^\"]*)\" to EUR \"([^\"]*)\" AmountTo \"([^\"]*)\"$")
    public void userConvertsMoneyFromGBPToEURAmountTo(String sellCurrency, String buyCurrency, String AmountTo) throws InterruptedException {
        conversionPage.NavigateToConversionPage();
        conversionPage.ConversionPagee(sellCurrency, buyCurrency, AmountTo);
        conversionPage.QuoteConversionPage();
    }

    @Then("^Conversion is underway should be displayed$")
    public void conversion_is_underway_should_be_displayed() throws Throwable {
        conversionPage.CheckIfConversionSucessfull();
    }

    @And("^User logs in to Settlego account with enough balance and click Conversions$")
    public void userLogsInToSettlegoAccountWithEnoughBalanceAndClickConversions() throws InterruptedException {
    }
}
