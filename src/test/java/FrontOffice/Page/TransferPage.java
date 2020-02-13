package FrontOffice.Page;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import runner.DriverFact;
import java.util.List;
import static org.junit.Assert.assertEquals;


public class TransferPage extends DriverFact {


    public void NavigateToPaymentPage() throws InterruptedException {
        sleep(6);
        driver.findElement(By.xpath("//a[contains(text(),'Payments')]")).click();
        sleep(5);
    }


    public void Transfer(String currency,String beneficiary) throws InterruptedException {
        sleep(3);

        List<WebElement> currencyList=driver.findElements(By.xpath("//span[@class='currency']"));
        for(int i=0;i<currencyList.size();i++){
            if(currency.equals(currencyList.get(i).getText())){
                currencyList.get(i).click();
                break;
            }
        }
        sleep(2);
        driver.findElement(By.xpath("//span[contains(text(),'OpenPayd Account')]")).click();
        sleep(2);
        driver.findElement(By.id("select2-stg-beneficiary-container")).click();
        driver.findElement(By.xpath("//input[@class='select2-search__field']")).sendKeys(beneficiary);
        driver.findElement(By.xpath("//input[@class='select2-search__field']")).sendKeys(Keys.ENTER);
        sleep(2);
        driver.findElement(By.xpath("//input[contains(@class,'btn-style pull-right full-mobile')]")).click();
        sleep(2);
        driver.findElement(By.id("payamount")).sendKeys("356");
        sleep(1);
        driver.findElement(By.id("pay-reason-stg")).sendKeys("test");
        driver.findElement(By.id("pay-reference")).sendKeys("test");
        sleep(2);
        driver.findElement(By.xpath("//input[@class='btn-style pull-right full-mobile']")).click();
        sleep(3);
        driver.findElement(By.xpath("//input[@class='btn-style pull-right full-mobile']")).click();
        sleep(3);

    }


    public void CheckIfTransferSuccessfull() {
        waitPresence(By.xpath("//span[contains(text(),'was successfully submitted.')]"));
        String successMesagge = driver.findElement(By.xpath("//span[contains(text(),'was successfully submitted.')]")).getText();
        assertEquals(successMesagge, "was successfully submitted.");
    }
}
