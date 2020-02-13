package runner;

import cucumber.api.Scenario;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

public class DriverFact {

    public static WebDriver driver;

    public void waitPresence(By locator) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
    }

    public void waitElementExist(By locator) {
        WebDriverWait wait = new WebDriverWait(driver, 100);
        wait.until(ExpectedConditions.elementToBeClickable(locator));
    }

    public void sleep(long time) throws InterruptedException {
        TimeUnit.SECONDS.sleep(time);
    }

    public static WebDriver launchChrome() {
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver");
        driver = new ChromeDriver();
 //       driver.manage().window().maximize();
        //driver.switchTo().window(driver.getWindowHandle());
        return driver;
        //WebDriverManager.chromedriver().setup();
//        driver = new ChromeDriver();
//    driver.switchTo().window(driver.getWindowHandle());
        // return driver;
    }
    public void tearDown(Scenario scenario) {
        try {
            if (driver != null && scenario.isFailed()) {
                scenario.embed(((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES), "image/png");
                driver.manage().deleteAllCookies();
                driver.quit();
                driver = null;
            }
            if (driver != null) {
                driver.manage().deleteAllCookies();
                driver.quit();
                driver = null;
            }
        } catch (Exception e) {
            System.out.println("Methods failed: tearDownFail, Exception: " + e.getMessage());
        }
    }
}
