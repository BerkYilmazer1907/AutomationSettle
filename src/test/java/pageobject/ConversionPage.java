package pageobject;


import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import runner.DriverFact;

import static org.junit.Assert.assertEquals;

public class ConversionPage extends DriverFact {

    public void NavigateToConversionPage() throws InterruptedException {
        waitPresence(By.className("beneficiaries"));
        driver.findElement(By.className("convert")).click();
        sleep(5);
    }

    public void ConversionPage(String sellCurrency, String buyCurrency, String AmountTo) throws InterruptedException {
        sleep(2);
        driver.findElement(By.id("select2-currency-sell-container")).click();
        driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys(sellCurrency);
        driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys(Keys.ENTER);
        sleep(2);
        driver.findElement(By.id("select2-currency-buy-container")).click();
        driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys(buyCurrency);
        driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys(Keys.ENTER);
        driver.findElement(By.id("conversionamount")).sendKeys("1000");
        sleep(1);
        driver.findElement(By.xpath("//*[@type='submit']")).click();
        sleep(5);
//        if (sellCurrency.contains("British") && buyCurrency.contains("Euro") && AmountTo.contains("Sell")) {
//            driver.findElement(By.id("conversionamount")).sendKeys("1100");
//            driver.findElement(By.xpath("//*[@type='submit']")).click();
//            sleep(5);
//        } else if (sellCurrency.contains("British") && buyCurrency.contains("Euro") && AmountTo.contains("Buy")) {
//            sleep(2);
//            driver.findElement(By.id("select2-currency-have-container")).click();
//            driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys(AmountTo);
//            driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys(Keys.ENTER);
//            driver.findElement(By.id("conversionamount")).sendKeys("1000");
//        }
//        else if (sellCurrency.contains("Euro") && buyCurrency.contains("British") && AmountTo.contains("Sell")) {
//            sleep(2);
//            driver.findElement(By.id("select2-currency-sell-container")).click();
//            driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys(sellCurrency);
//            driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys(Keys.ENTER);
//            sleep(2);
//            driver.findElement(By.id("select2-currency-buy-container")).click();
//            driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys(buyCurrency);
//            driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys(Keys.ENTER);
//            driver.findElement(By.id("conversionamount")).sendKeys("1000");
//            sleep(1);
//        }
//        else if (sellCurrency.contains("Euro") && buyCurrency.contains("British") && AmountTo.contains("Buy")){
//            sleep(2);
//            driver.findElement(By.id("select2-currency-sell-container")).click();
//            driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys(sellCurrency);
//            driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys(Keys.ENTER);
//            sleep(2);
//            driver.findElement(By.id("select2-currency-buy-container")).click();
//            driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys(buyCurrency);
//            driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys(Keys.ENTER);
//            sleep(2);
//            driver.findElement(By.id("select2-currency-have-container")).click();
//            driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys(AmountTo);
//            driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys(Keys.ENTER);
//            driver.findElement(By.id("conversionamount")).sendKeys("1000");

    }

    public void QuoteConversionPage() throws InterruptedException {
        driver.findElement(By.xpath("//*[@for='termAgreement']")).click();
        driver.findElement(By.xpath("//*[@type='submit']")).click();
        sleep(5);
    }

    public void CheckIfConversionSucessfull() {

        waitPresence(By.xpath("//*[text()='Congratulations! Conversion of']"));
        String successMessage = driver.findElement(By.xpath("//*[text()='Congratulations! Conversion of']")).getText();
        assertEquals(successMessage, "Congratulations! Conversion of");
    }

}
