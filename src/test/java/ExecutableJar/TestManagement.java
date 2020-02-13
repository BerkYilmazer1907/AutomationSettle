package ExecutableJar;

import FrontOffice.Page.LoginPage;
import FrontOffice.Page.PaymentPage;
import runner.DriverFact;

public class TestManagement {

    static LoginPage loginPage=new LoginPage();
    static PaymentPage paymentPage=new PaymentPage();
    static DriverFact driverFact=new DriverFact();
    public static void main(String[] args) throws InterruptedException {

        driverFact.launchChrome();
        loginPage.NavigateTo();

        switch (args[0]){
            case "login":
                loginPage.SettleLoginPage("sari@com.com");
                loginPage.CheckIfLoginSucessful();
                break;
            case "payment":
                loginPage.SettleLoginPage("sari@com.com");
                loginPage.CheckIfLoginSucessful();
                paymentPage.NavigateToPaymentPage();
                paymentPage.PaymentpagE("Euro","feepayment");
                paymentPage.CheckIfPaymentSuccessfull();
                break;



        }
    }
}
