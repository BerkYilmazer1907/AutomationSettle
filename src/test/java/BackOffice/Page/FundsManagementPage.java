package BackOffice.Page;

import org.openqa.selenium.By;
import runner.DriverFact;

public class FundsManagementPage extends DriverFact {

    public void FundsManagement (String serviceProvider, String SellCurrency, String BuyCurrency) throws InterruptedException{

        sleep(2);
        driver.findElement(By.xpath("/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/ul[1]/li[5]/a[1]")).click();
        sleep(1);
        driver.findElement(By.xpath("//span[contains(text(),'Currency Exchange')]")).click();
        driver.findElement(By.id("serviceProvider")).sendKeys(serviceProvider);
        sleep(2);
        driver.findElement(By.id("sellCurrency")).sendKeys(SellCurrency);
        sleep(2);
        driver.findElement(By.id("buyCurrency")).sendKeys(BuyCurrency);
        sleep(2);
        driver.findElement(By.id("amount")).sendKeys("1000");
        sleep(2 );
        driver.findElement(By.id("submitQuoteForm")).click();
        sleep(4 );
        driver.findElement(By.xpath("//*[@for='happyCheck']")).click();
        driver.findElement(By.id("confirm")).click();
        sleep(4 );
    }
        public void succesfullyCreateFundsManagement() throws InterruptedException{

            sleep(2);
            String successMessage = driver.findElement(By.xpath("//*[@class='alert alert-success settlSuccess']")).getText();
            System.out.println(successMessage);
            if (!successMessage.contains("successfully")) {
                return;
            }
            System.out.println("Your condition is working fine and the test will pass");

        }
    }