package FrontOffice.Page;

import org.openqa.selenium.By;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import runner.DriverFact;

import java.security.Key;
import java.util.Calendar;
import java.util.List;
import static org.junit.Assert.assertEquals;
import static java.lang.Thread.sleep;
import java.text.SimpleDateFormat;
import java.util.Date;



public class StandingOrderPage extends DriverFact{

    //DateControl

    public String dateSelection(int add) {
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
        Date date = new Date();
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        c.add(Calendar.DATE, add);
        date = c.getTime();
        System.out.println(formatter.format(date));
        return formatter.format(date);
    }

    public void NavigateToPaymentPage() throws InterruptedException {
        sleep(6);
        driver.findElement(By.xpath("//a[contains(text(),'Payments')]")).click();
        sleep(5);
}

    public void StandingOrder(String currency,String beneficiary, String paymentschedule) throws InterruptedException {
        sleep(3);

        List<WebElement> currencyList=driver.findElements(By.xpath("//span[@class='currency']"));
        for(int i=0;i<currencyList.size();i++){
            if(currency.equals(currencyList.get(i).getText())){
                currencyList.get(i).click();
                break;
            }
        }
        sleep(2);
        driver.findElement(By.xpath("//*[@class='select2-selection__arrow']")).click();
        driver.findElement(By.xpath("/html[1]/body[1]/span[1]/span[1]/span[1]/input[1]")).click();
        driver.findElement(By.xpath("/html[1]/body[1]/span[1]/span[1]/span[1]/input[1]")).sendKeys(beneficiary);
        driver.findElement(By.xpath("/html[1]/body[1]/span[1]/span[1]/span[1]/input[1]")).sendKeys(Keys.ENTER);
        sleep(1);
        driver.findElement(By.xpath("//div[@class='col-lg-6 col-md-6 col-sm-6 col-xs-12']//span[contains(text(),'Setup a Standing Order')]")).click();
        sleep(1);
        driver.findElement(By.xpath("//input[contains(@class,'btn-style pull-right full-mobile')]"));
        sleep(1);
        driver.findElement(By.xpath("//input[contains(@class,'btn-style pull-right full-mobile')]")).click();
        sleep(2);
        driver.findElement(By.id("payamount")).sendKeys("350");
        driver.findElement(By.id("pay-reference")).sendKeys("test");
        driver.findElement(By.id("select2-pay-frequency-select-container")).click();
        driver.findElement(By.xpath("//input[@class='select2-search__field']")).sendKeys(paymentschedule);
        driver.findElement(By.xpath("//input[@class='select2-search__field']")).sendKeys(Keys.ENTER);
        sleep(2);
        driver.findElement(By.id("payment-start-date")).sendKeys(dateSelection(3));
        driver.findElement(By.id("payment-start-date")).sendKeys(Keys.ENTER);
        driver.findElement(By.id("payment-until-date")).sendKeys(dateSelection(4));
        driver.findElement(By.id("payment-until-date")).sendKeys(Keys.ENTER);
        sleep(1);
        driver.findElement(By.xpath("//input[@class='btn-style pull-right full-mobile']")).click();
        sleep(2);
        driver.findElement(By.xpath("//input[@class='btn-style pull-right full-mobile']")).click();

    }

    public void CheckIfStandingOrderSuccessfull() {
        waitPresence(By.xpath("//h1[contains(text(),'Payment Scheduled!')]"));
        String successMesagge = driver.findElement(By.xpath("//h1[contains(text(),'Payment Scheduled!')]")).getText();
        assertEquals(successMesagge, "Payment Scheduled!");
    }
}