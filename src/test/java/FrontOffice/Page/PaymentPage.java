package FrontOffice.Page;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import runner.DriverFact;

import java.util.List;

import static org.junit.Assert.assertEquals;

public class PaymentPage extends DriverFact {


    public void NavigateToPaymentPage() throws InterruptedException {
        sleep(6);
        //driver.findElement(By.className("pay")).click();
        driver.findElement(By.xpath("//a[contains(text(),'Payments')]")).click();
        sleep(5);
    }

    public void PaymentpagE(String currency,String beneficiary) throws InterruptedException {
        sleep(3);
       // driver.findElement(By.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[7]")).click();

        List<WebElement> currencyList=driver.findElements(By.xpath("//span[@class='currency']"));
        for(int i=0;i<currencyList.size();i++){
            if(currency.equals(currencyList.get(i).getText())){
                currencyList.get(i).click();

                break;
            }
        }
        sleep(2);
        if (currency.contains("British")) {

            driver.findElement(By.xpath("//*[@class='select2-selection__arrow']")).click();
            driver.findElement(By.xpath("/html[1]/body[1]/span[1]/span[1]/span[1]/input[1]")).click();
            driver.findElement(By.xpath("/html[1]/body[1]/span[1]/span[1]/span[1]/input[1]")).sendKeys(beneficiary);
            driver.findElement(By.xpath("/html[1]/body[1]/span[1]/span[1]/span[1]/input[1]")).sendKeys(Keys.ENTER);
            sleep(3);
            driver.findElement(By.xpath("//label[contains(text(),'CHAPS')]")).click();
            driver.findElement(By.xpath("//input[contains(@class,'btn-style pull-right full-mobile')]")).click();
            sleep(2);
            driver.findElement(By.id("payamount")).sendKeys("356");
            driver.findElement(By.id("pay-reference")).sendKeys("test");
            sleep(2);
            driver.findElement(By.xpath("//input[@class='btn-style pull-right full-mobile']")).click();
            sleep(3);
            driver.findElement(By.xpath("//input[@class='btn-style pull-right full-mobile']")).click();
            sleep(3);

        }else if (currency.contains("Euro")) {

            driver.findElement(By.xpath("//*[@class='select2-selection__arrow']")).click();
            driver.findElement(By.xpath("/html[1]/body[1]/span[1]/span[1]/span[1]/input[1]")).click();
            driver.findElement(By.xpath("/html[1]/body[1]/span[1]/span[1]/span[1]/input[1]")).sendKeys(beneficiary);
            driver.findElement(By.xpath("/html[1]/body[1]/span[1]/span[1]/span[1]/input[1]")).sendKeys(Keys.ENTER);

            sleep(3);
            driver.findElement(By.xpath("//input[contains(@class,'btn-style pull-right full-mobile')]")).click();
            sleep(2);
            driver.findElement(By.id("payamount")).sendKeys("356");
            driver.findElement(By.id("pay-reference")).sendKeys("test");
            sleep(2);
            driver.findElement(By.xpath("//input[@class='btn-style pull-right full-mobile']")).click();
            sleep(3);
            driver.findElement(By.xpath("//input[@class='btn-style pull-right full-mobile']")).click();
            sleep(3);
        }
        else if (currency.contains("Canadian Dollar")) {

            driver.findElement(By.xpath("//*[@class='select2-selection__arrow']")).click();
            driver.findElement(By.xpath("/html[1]/body[1]/span[1]/span[1]/span[1]/input[1]")).click();
            driver.findElement(By.xpath("/html[1]/body[1]/span[1]/span[1]/span[1]/input[1]")).sendKeys(beneficiary);
            driver.findElement(By.xpath("/html[1]/body[1]/span[1]/span[1]/span[1]/input[1]")).sendKeys(Keys.ENTER);

            sleep(3);
            driver.findElement(By.xpath("//input[contains(@class,'btn-style pull-right full-mobile')]")).click();
            sleep(2);
            driver.findElement(By.id("payamount")).sendKeys("500");
            driver.findElement(By.id("pay-reference")).sendKeys("test");
            sleep(2);
            driver.findElement(By.xpath("//input[@class='btn-style pull-right full-mobile']")).click();
            sleep(3);
            driver.findElement(By.xpath("//input[@class='btn-style pull-right full-mobile']")).click();
            sleep(3);
        }

    }

    public void CheckIfPaymentSuccessfull() {

        waitPresence(By.xpath("//h1[contains(text(),'Payment Submitted')]"));
        String successMesagge = driver.findElement(By.xpath("//h1[contains(text(),'Payment Submitted')]")).getText();
        assertEquals(successMesagge, "Payment Submitted");
    }
}


