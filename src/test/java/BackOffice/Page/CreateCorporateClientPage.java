package BackOffice.Page;


import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import runner.DriverFact;
import runner.Utils;


public class CreateCorporateClientPage extends DriverFact {

    public void CreateCorporateClientsPage(String serviceProvider, String virtualAccount) throws InterruptedException{

        sleep(2 );
        driver.findElement(By.xpath("(//*[@class='title'])[1]")).click();
        waitPresence(By.xpath("(//*[@class='title'])[2]"));
        sleep(2 );
        driver.findElement(By.xpath("(//*[@class='title'])[2]")).click();
        sleep(2 );
        driver.findElement(By.xpath("(//*[@class='btn btn-primary btn-cons'])[1]")).click();
        sleep(2);
        driver.findElement(By.xpath("(//*[@class='form-control'])[1]")).sendKeys("AutoTest");
        driver.findElement(By.xpath("(//*[@class='form-control'])[2]")).sendKeys("AutoTest");
        driver.findElement(By.xpath("(//*[@class='form-control'])[3]")).sendKeys("Limi");
        driver.findElement(By.xpath("(//*[@class='form-control'])[4]")).sendKeys("deneme");
        driver.findElement(By.xpath("(//*[@class='form-control'])[5]")).click();
        driver.findElement(By.xpath("(//*[@class='day'])[5]")).click();
        driver.findElement(By.xpath("(//*[@class='form-control'])[8]")).sendKeys("Test");
        driver.findElement(By.xpath("(//*[@class='form-control noSpecial'])[1]")).sendKeys("12345");
        driver.findElement(By.xpath("(//*[@class='form-control'])[10]")).sendKeys("Test");
        driver.findElement(By.xpath("(//*[@class='form-control'])[12]")).sendKeys("Test");
        driver.findElement(By.xpath("(//*[@class='form-control'])[12]")).sendKeys("Germany");
        driver.findElement(By.xpath("(//*[@class='form-control'])[21]")).sendKeys("deneme");
        driver.findElement(By.xpath("(//*[@class='form-control'])[22]")).sendKeys(Utils.generateEmail(System.currentTimeMillis()));
        sleep(1);
        driver.findElement(By.xpath("(//*[@class='select2-selection__arrow'])[1]")).click();
        driver.findElement(By.xpath("(//*[@class='select2-search__field'])[1]")).sendKeys("Germany");
        driver.findElement(By.xpath("(//*[@class='select2-search__field'])[1]")).sendKeys(Keys.ENTER);
        sleep(1);
        driver.findElement(By.xpath("(//*[@class='form-control'])[23]")).sendKeys("1234556");
        driver.findElement(By.xpath("(//*[@class='select2-selection__arrow'])[2]")).click();
        driver.findElement(By.xpath("(//*[@class='select2-search__field'])")).sendKeys("Germany");
        driver.findElement(By.xpath("(//*[@class='select2-search__field'])")).sendKeys(Keys.ENTER);
        driver.findElement(By.xpath("(//*[@class='form-control'])[24]")).sendKeys("1234556");
        driver.findElement(By.id("currencies")).sendKeys("Euro");
        driver.findElement(By.id("timezones")).sendKeys("Havana");
        driver.findElement(By.id("serviceProvider")).sendKeys(serviceProvider);
        sleep(1);
        //driver.findElement(By.xpath("(//*[@class='form-control'])[33]")).click();
        driver.findElement(By.xpath("(//*[@class='checkbox'])/label[@for='Contis']")).click();
        sleep(2);
        driver.findElement(By.xpath("//*[@class='btn btn-primary btn-cons pull-right']")).click();
        driver.findElement(By.xpath("//*[@class='checkbox check-success virtualAccountProviderError']/label[@for='happyCheck']")).click();
        driver.findElement(By.xpath("//*[@class='btn btn-primary btn-cons pull-right']")).click();
        sleep(2);
        }
        }




