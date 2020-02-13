package BackOffice.Steps;

import BackOffice.Page.FundsManagementPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FundsManagementSteps {

    FundsManagementPage fundsManagementPage;

        public FundsManagementSteps(FundsManagementPage fundsManagementPage){

            this.fundsManagementPage = fundsManagementPage;
        }

    @When("^Service Provider \"([^\"]*)\" and SellCurreny \"([^\"]*)\"select BuyCurrency \"([^\"]*)\"$")
    public void serviceProviderAndSellCurrenySelectBuyCurrency(String serviceProvider, String SellCurrency, String BuyCurrency) throws Throwable {
            fundsManagementPage.FundsManagement(serviceProvider, SellCurrency, BuyCurrency);
    }
    @Then("^Succesfully Create Funds Management$")
    public void succesfullyCreateFundsManagement() throws Throwable {
            fundsManagementPage.succesfullyCreateFundsManagement();
    }
}
