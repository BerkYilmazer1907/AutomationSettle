package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)

@CucumberOptions(
        features = {"src/test/java/FrontOffice/Feature"},
        glue = {"FrontOffice/Steps"},
        plugin = {"pretty",
                "html:target/cucumber",
                "json:target/cucumber.json",
                "com.cucumber.listener.ExtentCucumberFormatter:target/report.html"}
        ,tags = {"@halo100"}
)
public class CucumberRunner {
}
