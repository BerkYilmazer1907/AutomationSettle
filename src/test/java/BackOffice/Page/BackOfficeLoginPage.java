package BackOffice.Page;

import org.openqa.selenium.By;
import runner.DriverFact;
import static org.junit.Assert.assertEquals;

public class BackOfficeLoginPage extends DriverFact {


    public void NavigateToBackOffice(){
        driver.get("https://test-backoffice.settlego.com/login");
    }

    public void SettleBackOfficeLoginPage(String user) {

        driver.findElement(By.id("txtusername")).click();
        driver.findElement(By.id("txtusername")).sendKeys(user);
        driver.findElement(By.id("txtpassword")).sendKeys("Test1234");
        driver.findElement(By.id("loginButton")).click();
        //Thread.sleep(5000);
    }


    public void CheckIfLoginSucessful() throws InterruptedException {
        Thread.sleep(5000);
        //driver.findElement(By.id("user-options")).click();
        String UserManagement = driver.findElement(By.xpath("//*[@class='content']/h1")).getText();
        assertEquals(UserManagement, "SettleGo Backoffice");
}}

