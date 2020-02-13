package BackOffice.Page;

import org.openqa.selenium.By;
import runner.DriverFact;

public class ConversionPage extends DriverFact {


    public void Conversion (String ClientID, String ClientUser, String SellCurrency, String BuyCurrency, String AmountTo) throws InterruptedException {
    sleep(3);
    driver.findElement(By.xpath("/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/ul[1]/li[6]/a[1]/span[1]")).click();
    driver.findElement(By.id("clientId")).sendKeys(ClientID);
    sleep(1);
    driver.findElement(By.id("getUsers")).click();
    sleep(1);
    driver.findElement(By.id("clientUser")).sendKeys(ClientUser);
    sleep(1);
    driver.findElement(By.id("sellCurrency")).sendKeys(SellCurrency);
    sleep(1);
    driver.findElement(By.id("buyCurrency")).sendKeys(BuyCurrency);
    sleep(1);
    driver.findElement(By.id("fixedSide")).sendKeys(AmountTo);
    sleep(1);
    driver.findElement(By.id("amount")).sendKeys("1000");
    driver.findElement(By.id("submitQuoteForm")).click();
    sleep(2);
    driver.findElement(By.xpath("(//*[@for='happyCheck'])")).click();
    sleep(1);
    driver.findElement(By.id("confirm")).click();
    sleep(2);

    }

    public void succesfullyConversion() throws InterruptedException{

        sleep(2);
        String successMessage = driver.findElement(By.xpath("//*[@class='alert alert-success settlSuccess']")).getText();
        System.out.println(successMessage);
        if (!successMessage.contains("successfully")) {
            return;
        }
        System.out.println("Your condition is working fine and the test will pass");

    }
}
