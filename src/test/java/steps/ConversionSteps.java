package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import pageobject.ConversionPage;

public class ConversionSteps {
    ConversionPage conversionPage;

    public ConversionSteps(ConversionPage conversionPage) {

        this.conversionPage = conversionPage;
    }

    @And("^Satilacak currency \"([^\"]*)\" ve alinacak currency \"([^\"]*)\" olan Amount to \"([^\"]*)\" secilen conversion islemi yapilir$")
    public void satilacak_currency_ve_alinacak_currency_olan_Amount_to_secilen_conversion_islemi_yapilir(String sellCurrency, String buyCurrency, String AmountTo) throws Throwable {
        conversionPage.NavigateToConversionPage();
        conversionPage.ConversionPage(sellCurrency,buyCurrency,AmountTo);
        conversionPage.QuoteConversionPage();
    }

    @Then("^Conversion islemi basarili olmali$")
    public void conversion_islemi_basarili_olmali() throws Throwable {
        conversionPage.CheckIfConversionSucessfull();
    }
}





