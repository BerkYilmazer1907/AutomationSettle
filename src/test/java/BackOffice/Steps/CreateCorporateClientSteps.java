package BackOffice.Steps;

import BackOffice.Page.CreateCorporateClientPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class CreateCorporateClientSteps {

    CreateCorporateClientPage createcorporatesclientPage;

    public CreateCorporateClientSteps(CreateCorporateClientPage createcorporatesclientPage) {

        this.createcorporatesclientPage = createcorporatesclientPage;
    }

    @And("^Select SP \"([^\"]*)\" and clienttype \"([^\"]*)\"select VA \"([^\"]*)\"$")
    public void selectSPAndSelectVA(String serviceProvider, String virtualAccount, String clienttype) throws Throwable {
        createcorporatesclientPage.CreateCorporateClientsPage(serviceProvider,virtualAccount);
    }

    @Then("^Succesfull Add Client$")
    public void succesfullAddClient() {
    }
}




