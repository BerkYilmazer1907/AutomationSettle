package FrontOffice.Page;

import org.openqa.selenium.By;
import runner.DriverFact;

import static org.junit.Assert.assertEquals;

public class LoginPage extends DriverFact {


    public void NavigateTo(){
        driver.get("https://test-console.openpayd.com/login");
    }

    public void SettleLoginPage(String user) throws InterruptedException {

        driver.findElement(By.xpath("/html[1]/body[1]/div[3]/div[3]/div[1]/div[1]/a[1]")).click();
        Thread.sleep(5000);
        driver.findElement(By.id("loginId")).sendKeys(user);
        driver.findElement(By.id("loginPass")).sendKeys("Test12345");
        driver.findElement(By.xpath("/html[1]/body[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/form[1]/button[1]")).click();
    }
    //Thread.sleep(5000);
    public void CheckIfLoginSucessful() throws InterruptedException {

        Thread.sleep(5000);
        String userName = driver.findElement(By.xpath("//span[contains(text(),'Currency Accounts')]")).getText();
        assertEquals("Currency Accounts", userName);
    }

    }





