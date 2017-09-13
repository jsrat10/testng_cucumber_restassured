package main;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


public class TestRunner {
	@CucumberOptions(
			strict = true,
			monochrome = true, 
			features = "src/test/resources/features",
			glue = "steps",
			plugin = {"pretty", "html:target/cucumber-html-report" },
			tags={"@Regression,@Smoke"})

	public class CucumberRunner extends AbstractTestNGCucumberTests {
        public  Properties config = null;
        

        public void LoadConfigProperty() throws IOException {
                config = new Properties();
                FileInputStream ip = new FileInputStream(
                                System.getProperty("user.dir") + "//src//test//resources//config//config.properties");
                config.load(ip);
        }
	}
}
