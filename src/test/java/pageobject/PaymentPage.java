package pageobject;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import runner.DriverFact;
import static org.junit.Assert.assertEquals;

public class PaymentPage extends DriverFact {


    public void NavigateToPaymentPage() throws InterruptedException {
        sleep(4);
        driver.findElement(By.className("pay")).click();
        sleep(3);
    }

    public void PaymentpagE(String currency,String beneficiary) throws InterruptedException {
        sleep(3);
        driver.findElement(By.id("select2-pay-currency-container")).click();
        driver.findElement(By.className("select2-search__field")).sendKeys(currency);
        driver.findElement(By.className("select2-search__field")).sendKeys(Keys.ENTER);
        sleep(2);
        driver.findElement(By.id("payamount")).sendKeys("10000");
        driver.findElement(By.id("select2-pay-beneficiary-container")).click();
        driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys(beneficiary);
        driver.findElement(By.className("select2-search__field")).sendKeys(Keys.ENTER);
        sleep(2);
        driver.findElement(By.id("pay-reference")).sendKeys("Test");
        driver.findElement(By.xpath("//*[@type='button']")).click();
        sleep(2);
        driver.findElement(By.xpath("//*[@type='button']")).click();

    }

    public void CheckIfPaymentSuccessfull() {
        waitPresence(By.xpath("//*[text()='was successfully created!']"));
        String successMesagge = driver.findElement(By.xpath("//*[text()='was successfully created!']")).getText();
        assertEquals(successMesagge, "was successfully created!");
    }
}


