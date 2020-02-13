package BackOffice.Page;

import org.openqa.selenium.By;
import runner.DriverFact;
import org.openqa.selenium.Keys;
import runner.Utils;
import java.security.Key;
import java.util.UUID;
import static org.junit.Assert.assertEquals;

public class ManualAdjustmentPage extends DriverFact {


    public void CreateManualAdjustmentPage(String ClientID, String serviceProvider, String currency) throws InterruptedException {
        String uuid = UUID.randomUUID().toString();
        sleep(2);
        driver.findElement(By.xpath("/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/ul[1]/li[8]/a[1]/span[1]")).click();
        sleep(2);
        driver.findElement(By.xpath("//span[contains(text(),'Manual Adjustment Create')]")).click();
        sleep(2);
        driver.findElement(By.id("clientId")).sendKeys(ClientID);
        driver.findElement(By.id("clientId")).sendKeys(Keys.ENTER);
        sleep(2);
        driver.findElement(By.id("currencies")).sendKeys(currency);
        driver.findElement(By.id("currencies")).sendKeys(Keys.ENTER);
        sleep(1);
        driver.findElement(By.id("amount")).sendKeys("10000");
        driver.findElement(By.id("serviceProvider")).sendKeys(serviceProvider);
        driver.findElement(By.id("serviceProvider")).sendKeys(Keys.ENTER);
        driver.findElement(By.id("spiReference")).sendKeys(uuid);
        driver.findElement(By.id("internalReference")).sendKeys(uuid);
        driver.findElement(By.id("clientReference")).sendKeys(uuid);
        driver.findElement(By.id("clientReason")).sendKeys(uuid);
        sleep(1);
        driver.findElement(By.id("submitAdjustmentForm")).click();
        sleep(3);
        driver.findElement(By.id("confirmAdjustment")).click();
    }

    public boolean CheckIfManualAdjustmentSuccessful() throws InterruptedException {

        sleep(2);
        //String successMessage = driver.findElement(By.xpath("//*[@class='alert alert-success settlSuccess']")).getText();
        String successMessage = driver.findElement(By.xpath("//*[@class='alert alert-success settlSuccess']")).getText();
        //assertEquals(successMessage.contains("successfully"), true);
        System.out.println(successMessage);
        if (!successMessage.contains("successfully")) {
            return false;
        }
        System.out.println("Your condition is working fine and the test will pass");
        return true;
    }

}

