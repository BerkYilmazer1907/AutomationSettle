package pageobject;

import org.openqa.selenium.By;
import runner.DriverFact;

import static org.junit.Assert.assertEquals;

public class LoginPage extends DriverFact {

    public void SettleLoginPage(String kullanici) {

        driver.findElement(By.xpath("//li[@class='nav-login']")).click();
        driver.findElement(By.id("loginId")).sendKeys(kullanici);
        driver.findElement(By.id("loginPass")).sendKeys("Test1234");
        driver.findElement(By.xpath("//button[text()='Login']")).click();
        //Thread.sleep(5000);
    }

    public void NavigateTo(){
        driver.get("https://test.settlego.com/");
    }
    public void CheckIfLoginSucessful() throws InterruptedException {
        Thread.sleep(5000);
        driver.findElement(By.className("user-icon")).click();
        String userName = driver.findElement(By.xpath("//*[@class='user-name']")).getText().toString();
        assertEquals(userName, "Testauto TestAuto");
    }
}
