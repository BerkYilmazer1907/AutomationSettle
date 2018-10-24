package steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;


import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.chrome.ChromeDriver;
import runner.DriverFact;

public class Hooks extends DriverFact {


    @Before
    public void setup() {
        launchChrome();
    }

    @After
    public void tearDownAll(Scenario scenario) {
        tearDown(scenario);
    }
}
