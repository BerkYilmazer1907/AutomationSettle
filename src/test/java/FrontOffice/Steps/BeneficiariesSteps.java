package FrontOffice.Steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

import FrontOffice.Page.BeneficiariesPage;

public class BeneficiariesSteps { //Kontrol enter , constructer yapılmali

    BeneficiariesPage beneficiariesPage;

    public BeneficiariesSteps(BeneficiariesPage beneficiariesPage) {
        this.beneficiariesPage = beneficiariesPage;
    }


    @Then("^Beneficiary eklemesi basarili olmali$")
    public void beneficiary_eklemesi_basarili_olmali() throws Throwable {
        beneficiariesPage.CheckIfBeneficiarySuccessful();
    }

    @And("^Para birimi \"([^\"]*)\" odeme sekli \"([^\"]*)\" ve ulkesi \"([^\"]*)\" olan beneficiary eklenir$")
    public void paraBirimiOdemeSekliVeUlkesiOlanBeneficiaryEklenir(String currency, String payment, String bankCountry, String benCountry) throws Throwable {
        beneficiariesPage.NavigateToBeneficiaresPage();
        beneficiariesPage.SettingsPage(currency, bankCountry);
        beneficiariesPage.BankDetailsPage(currency, payment, bankCountry);
        beneficiariesPage.BeneficiaryPage(benCountry);
        beneficiariesPage.OverviewPage();
    }

    @And("^Para birimi \"([^\"]*)\" odeme sekli \"([^\"]*)\" ve ulkesi \"([^\"]*)\"ve benulkesi \"([^\"]*)\"olan beneficiary eklenir$")
    public void paraBirimiOdemeSekliVeUlkesiVeBenulkesiOlanBeneficiaryEklenir(String currency, String payment, String bankCountry, String benCountry) throws Throwable {
        beneficiariesPage.NavigateToBeneficiaresPage();
        beneficiariesPage.SettingsPage(currency, bankCountry);
        beneficiariesPage.BankDetailsPage(currency, payment, bankCountry);
        beneficiariesPage.BeneficiaryPage(benCountry);
        beneficiariesPage.OverviewPage();

    }

    @And("^Ulkesi \"([^\"]*)\" ve benulkesi\"([^\"]*)\"olan DHB beneficiary eklenir$")
    public void ulkesiVeBenulkesiOlanDHBBeneficiaryEklenir(String bankCountry, String benCountry) throws Throwable {
        beneficiariesPage.NavigateToBeneficiaresPage();
        beneficiariesPage.SettingsPageDhb(bankCountry);
        beneficiariesPage.BankDetailsPageDHB(bankCountry);
        beneficiariesPage.BeneficiaryPageDHB(benCountry);
        beneficiariesPage.OverviewPage();
    }

    @And("^ClearBank Kullanicisi Ile ParaBirimi \"([^\"]*)\" OdemeSekli \"([^\"]*)\" Ve Ulkesi \"([^\"]*)\" Ve \"([^\"]*)\" OlanBeneficiaryEklenir$")
    public void clearbankKullanicisiIleParaBirimiOdemeSekliVeUlkesiVeOlanBeneficiaryEklenir(String currency, String bankCountry, String payment, String benCountry) throws Throwable {
        beneficiariesPage.NavigateToBeneficiaresPage();
        beneficiariesPage.SettingsPage(currency, bankCountry);
        beneficiariesPage.BankDetailsPageClearBank(payment);
        beneficiariesPage.BeneficiaryPageDHB(benCountry);
        beneficiariesPage.OverviewPage();
    }

    @And("^ClearBank Kullanicisi Ile ParaBirimi \"([^\"]*)\" Ulkesi \"([^\"]*)\" odemesekli \"([^\"]*)\" Ve \"([^\"]*)\" OlanBeneficiaryEklenir$")
    public void clearbankKullanicisiIleParaBirimiUlkesiOdemesekliVeOlanBeneficiaryEklenir(String currency, String bankCountry, String payment, String benCountry) throws Throwable {
        beneficiariesPage.NavigateToBeneficiaresPage();
        beneficiariesPage.SettingsPage(currency, bankCountry);
        beneficiariesPage.BankDetailsPageClearBank(payment);
        beneficiariesPage.BeneficiaryPageDHB(benCountry);
        beneficiariesPage.OverviewPage();
    }

    @And("^ONPEX user \"([^\"]*)\" country \"([^\"]*)\" payment \"([^\"]*)\" and \"([^\"]*)\" add beneficiary$")
    public void onpexUserCountryPaymentAndAddBeneficiary(String currency, String bankCountry, String payment, String benCountry) throws Throwable {
        beneficiariesPage.NavigateToBeneficiaresPage();
        beneficiariesPage.SettingsPage(currency, bankCountry);
        beneficiariesPage.BankDetailsPageOnpex(payment);
        beneficiariesPage.BeneficiaryPageOnpex(benCountry);
        beneficiariesPage.OverviewPage();
    }
}
