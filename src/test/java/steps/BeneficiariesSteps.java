package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

import static org.junit.Assert.*;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import pageobject.BeneficiariesPage;
import runner.DriverFact;

public class BeneficiariesSteps { //Kontrol enter , constructer yapılmali

    BeneficiariesPage beneficiariesPage;

    public BeneficiariesSteps(BeneficiariesPage beneficiariesPage) {
        this.beneficiariesPage = beneficiariesPage;
    }


    @Then("^Beneficiary eklemesi basarili olmali$")
    public void beneficiary_eklemesi_basarili_olmali() throws Throwable {
        beneficiariesPage.CheckIfBeneficiarySuccessful();
        beneficiariesPage.BeneficiaryDelete();
    }

    @And("^Para birimi \"([^\"]*)\" odeme sekli \"([^\"]*)\" ve ulkesi \"([^\"]*)\" olan beneficiary eklenir$")
    public void paraBirimiOdemeSekliVeUlkesiOlanBeneficiaryEklenir(String currency, String payment, String bankCountry, String benCountry) throws Throwable {
        beneficiariesPage.NavigateToBeneficiaresPage();
        beneficiariesPage.SettingsPage(currency, bankCountry);
        beneficiariesPage.BankDetailsPage(currency, payment, bankCountry);
        beneficiariesPage.BeneficiaryPage(currency, payment, benCountry);
        beneficiariesPage.OverviewPage();
    }

    @And("^Beneficiary silinir$")
    public void beneficiarySilinir() throws Throwable {
        beneficiariesPage.BeneficiaryDelete();

    }

    @Then("^Beneficiary silinmesi basarili olmali$")
    public void beneficiarySilinmesiBasariliOlmali() throws Throwable {

    }

    @And("^Para birimi \"([^\"]*)\" odeme sekli \"([^\"]*)\" ve ulkesi \"([^\"]*)\"ve benulkesi \"([^\"]*)\"olan beneficiary eklenir$")
    public void paraBirimiOdemeSekliVeUlkesiVeBenulkesiOlanBeneficiaryEklenir(String currency, String payment, String bankCountry, String benCountry) throws Throwable {
        beneficiariesPage.NavigateToBeneficiaresPage();
        beneficiariesPage.SettingsPage(currency, bankCountry);
        beneficiariesPage.BankDetailsPage(currency, payment, bankCountry);
        beneficiariesPage.BeneficiaryPage(currency, bankCountry, benCountry);
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

    @And("^ContisDhb kullanicisi ile para birimi \"([^\"]*)\" odeme sekli \"([^\"]*)\" ve ulkesi \"([^\"]*)\" ve \"([^\"]*)\" olan beneficiary eklenir$")
    public void contisdhbKullanicisiIleParaBirimiOdemeSekliVeUlkesiVeOlanBeneficiaryEklenir(String currency, String payment, String bankCountry, String benCountry) throws Throwable {
        beneficiariesPage.NavigateToBeneficiaresPage();
        beneficiariesPage.SettingsPage(currency, bankCountry);
        beneficiariesPage.BankDetailsCtsDhb(currency, payment, bankCountry, benCountry);
        beneficiariesPage.BeneficiaryPage(currency, bankCountry, benCountry);
        beneficiariesPage.OverviewPage();
    }

    @And("^Monex kullanicisi ile para birimi \"([^\"]*)\" ulkesi \"([^\"]*)\" ve \"([^\"]*)\" olan beneficiary eklenir$")
    public void monexKullanicisiIleParaBirimiUlkesiVeOlanBeneficiaryEklenir(String currency, String bankCountry, String benCountry) throws Throwable {
        beneficiariesPage.NavigateToBeneficiaresPage();
        beneficiariesPage.SettingsPage(currency, bankCountry);
        beneficiariesPage.BankDetailsPageMnx(currency, bankCountry);
        beneficiariesPage.BeneficiaryPage(currency, bankCountry, benCountry);
        beneficiariesPage.OverviewPage();
    }
}

