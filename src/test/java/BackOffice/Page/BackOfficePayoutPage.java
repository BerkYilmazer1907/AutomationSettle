package BackOffice.Page;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import runner.DriverFact;

public class BackOfficePayoutPage extends DriverFact {

    public void Payout (String ClientID, String ClientUser, String currency,String beneficiary) throws InterruptedException{
        sleep(2);
        driver.findElement(By.xpath("//span[contains(text(),'Pay Out')]")).click();
        driver.findElement(By.id("clientId")).sendKeys(ClientID);
        driver.findElement(By.id("clientId")).sendKeys(Keys.ENTER);
        sleep(1);
        driver.findElement(By.id("getUsers")).click();
        sleep(2);
        driver.findElement(By.id("clientUser")).sendKeys(ClientUser);
        driver.findElement(By.id("clientUser")).sendKeys(Keys.ENTER);
        sleep(2);
        driver.findElement(By.id("currencies")).sendKeys(currency);
        sleep(3 );
       driver.findElement(By.id("currencies")).sendKeys(Keys.ENTER);
        sleep(3);
        driver.findElement(By.id("select2-beneficiaries-container")).click();
        sleep(3);
        driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys(beneficiary);
        //driver.findElement(By.id("select2-beneficiaries-container")).sendKeys(beneficiary);
        sleep(3);
        driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys(Keys.ENTER);
        sleep(3 );
        driver.findElement(By.id("amount")).sendKeys("1000");
        driver.findElement(By.id("reasonCode")).sendKeys("Personal");
        driver.findElement(By.xpath("(//*[@type='text'])[4]")).sendKeys("test");
        sleep(2);
        driver.findElement(By.id("submitPaymentForm")).click();
        sleep(2);
        driver.findElement(By.id("confirm")).click();
    }
    public boolean succesfully_Create_Payout() throws InterruptedException {
    sleep(2);
    String successMessage = driver.findElement(By.xpath("//*[@class='alert alert-success settlSuccess']")).getText();
        System.out.println(successMessage);
        if (!successMessage.contains("successfully")) {
            return false;
        }
        System.out.println("Your condition is working fine and the test will pass");
            return true;
    }
}



