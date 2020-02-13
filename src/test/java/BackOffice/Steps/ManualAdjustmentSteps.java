package BackOffice.Steps;

import BackOffice.Page.ManualAdjustmentPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class ManualAdjustmentSteps {

    ManualAdjustmentPage manualadjustmentPage;

public ManualAdjustmentSteps(ManualAdjustmentPage manualadjustmentPage) {

    this.manualadjustmentPage = manualadjustmentPage;
}



    @When("^Select Client \"([^\"]*)\" and ServiseProvider \"([^\"]*)\"select Currency \"([^\"]*)\"$")
    public void selectClientAndServiseProviderSelectCurrency(String ClientID, String ServiceProvider, String currency) throws Throwable {
        manualadjustmentPage.CreateManualAdjustmentPage(ClientID,ServiceProvider,currency);

    }

    @Then("^Succesfully Create Manual Adjustment$")
    public void succesfullyCreateManualAdjustment()throws Throwable {
        manualadjustmentPage.CheckIfManualAdjustmentSuccessful();

    }
}
