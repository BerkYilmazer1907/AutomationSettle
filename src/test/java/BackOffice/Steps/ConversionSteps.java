package BackOffice.Steps;

import BackOffice.Page.ConversionPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ConversionSteps {

    ConversionPage conversionPage;
    public ConversionSteps(ConversionPage conversionPage) {

        this.conversionPage = conversionPage;
}

    @When("^ClientID \"([^\"]*)\" and ClientUser \"([^\"]*)\" select SellCurrency \"([^\"]*)\" select BuyCurrency \"([^\"]*)\" and amount to \"([^\"]*)\"$")
    public void ClientIDAndClientUserSelectSellCurrencySelectBuyCurrencyAndAmountTo(String ClientID, String ClientUser, String SellCurrency, String BuyCurrency, String AmountTo) throws Throwable {
    conversionPage.Conversion(ClientID,ClientUser,SellCurrency,BuyCurrency,AmountTo);
    }

    @Then("^Succesfully Conversion$")
    public void succesfullyConversion() throws Throwable {
        conversionPage.succesfullyConversion();
    }
}
