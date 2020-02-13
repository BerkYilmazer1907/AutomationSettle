package FrontOffice.Page;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import runner.DriverFact;

import static org.junit.Assert.assertEquals;

public class BeneficiariesPage extends DriverFact {

    public void NavigateToBeneficiaresPage() throws InterruptedException {
        waitPresence(By.className("beneficiaries"));
        driver.findElement(By.className("beneficiaries")).click();
        sleep(4);
        driver.findElement(By.linkText("Add Beneficiary")).click();
    }

    String AccountHolderNameXpath = "//*[@placeholder='Account Holder Name']";
    String IbanXpath = "//*[@placeholder='IBAN']";
    String BICSWIFTXpath = "//*[@placeholder='BIC/SWIFT']";

    public void SettingsPage(String currency, String bankCountry) throws InterruptedException {
        waitPresence(By.id("select2-currency-container"));
        driver.findElement(By.id("select2-currency-container")).click();
        driver.findElement(By.className("select2-search__field")).sendKeys(currency);
        driver.findElement(By.className("select2-search__field")).sendKeys(Keys.ENTER);
        sleep(1 );
        driver.findElement(By.id("select2-countryId-container")).click();
        driver.findElement(By.className("select2-search__field")).sendKeys(bankCountry);
        driver.findElement(By.className("select2-search__field")).sendKeys(Keys.ENTER);
        driver.findElement(By.xpath("//*[@type='submit']")).click();
    }

    public void BankDetailsPage(String currency, String payment, String bankCountry) throws InterruptedException {
        if (currency.contains("British") && bankCountry.contains("United Kingdom")) {
            sleep(2);
            waitPresence(By.xpath(AccountHolderNameXpath));
            driver.findElement(By.xpath(AccountHolderNameXpath)).sendKeys("Test1234");
            driver.findElement(By.xpath("//*[@placeholder='Sort Code']")).sendKeys("074456");
            driver.findElement(By.xpath(IbanXpath)).sendKeys("GB89BARC20320023233545");
            driver.findElement(By.xpath(BICSWIFTXpath)).sendKeys("ANTSGB2L");
            driver.findElement(By.xpath("//*[@placeholder='Account Number']")).sendKeys("23233545");
        } else if (currency.contains("British") && bankCountry.contains("Germany")) {
            sleep(2);
            driver.findElement(By.xpath(AccountHolderNameXpath)).sendKeys("TestGermany");
            driver.findElement(By.xpath(IbanXpath)).sendKeys("DE89370400440532013000");
            driver.findElement(By.xpath(BICSWIFTXpath)).sendKeys("AARBDE5W100");
        } else if (currency.contains("Euro") && bankCountry.contains("United Kingdom")) {
            sleep(2);
            driver.findElement(By.xpath(AccountHolderNameXpath)).sendKeys("TestEuroGer");
            driver.findElement(By.xpath(IbanXpath)).sendKeys("GB89BARC20320023233545");
            driver.findElement(By.xpath(BICSWIFTXpath)).sendKeys("ANTSGB2L");

        } else if (currency.contains("Canadian") && bankCountry.contains("Canada")) {
            sleep(2);
            driver.findElement(By.xpath(AccountHolderNameXpath)).sendKeys("TestCanada");
            driver.findElement(By.xpath("//*[@placeholder='CTN']")).sendKeys("083333333");
            driver.findElement(By.xpath(BICSWIFTXpath)).sendKeys("ACNACA2Q");
            driver.findElement(By.xpath("//*[@placeholder='Account Number']")).sendKeys("73988638");
        } else if (currency.contains("Norwegian Krone") && bankCountry.contains("Norway")) {
            sleep(2);
            driver.findElement(By.xpath(AccountHolderNameXpath)).sendKeys("TestNorway");
            driver.findElement(By.xpath(IbanXpath)).sendKeys("NO9386011117947");
            driver.findElement(By.xpath(BICSWIFTXpath)).sendKeys("DNAMNOKK");
        } else if (currency.contains("Euro") && bankCountry.contains("Belarus")) {
            sleep(2);
            driver.findElement(By.xpath(AccountHolderNameXpath)).sendKeys("TestBelarus");
            driver.findElement(By.xpath(IbanXpath)).sendKeys("BY86AKBB10100000002966000000");
            driver.findElement(By.xpath(BICSWIFTXpath)).sendKeys("ABLTBY22XXX");
        } else if (currency.contains("Euro") && bankCountry.contains("Malta")) {
            sleep(2);
            driver.findElement(By.xpath(AccountHolderNameXpath)).sendKeys("TestMalta");
            driver.findElement(By.xpath(IbanXpath)).sendKeys("MT31MALT01100000000000000000123");
            driver.findElement(By.xpath(BICSWIFTXpath)).sendKeys("AKBKMTMTXXX");
        } else if (currency.contains("British Pound") && bankCountry.contains("Belarus")) {
            sleep(2);
            driver.findElement(By.xpath(AccountHolderNameXpath)).sendKeys("TestBelarusUk");
            driver.findElement(By.xpath(IbanXpath)).sendKeys("BY86AKBB10100000002966000000");
            driver.findElement(By.xpath(BICSWIFTXpath)).sendKeys("ABLTBY22XXX");
        } else if (currency.contains("British Pound") && bankCountry.contains("Malta")) {
            sleep(2);
            driver.findElement(By.xpath(AccountHolderNameXpath)).sendKeys("TestMaltaUk");
            driver.findElement(By.xpath(IbanXpath)).sendKeys("MT31MALT01100000000000000000123");
            driver.findElement(By.xpath(BICSWIFTXpath)).sendKeys("AKBKMTMTXXX");
        } else {
            waitPresence(By.xpath(AccountHolderNameXpath));
            driver.findElement(By.xpath(AccountHolderNameXpath)).sendKeys("Test1234");
            driver.findElement(By.xpath(IbanXpath)).sendKeys("DE89370400440532013000");
            driver.findElement(By.xpath(BICSWIFTXpath)).sendKeys("AARBDE5W100");
        }
        driver.findElement(By.xpath("//*[@type='submit']")).click();
    }

    public void BeneficiaryPage(String benCountry) throws InterruptedException {
        sleep(2);
        driver.findElement(By.xpath("//*[@placeholder='Business Name']")).sendKeys("Test");
        driver.findElement(By.xpath("//*[@placeholder='Email']")).sendKeys("test@com.com");
        driver.findElement(By.xpath("//*[@placeholder='Beneficiary Nickname']")).sendKeys("test");
        driver.findElement(By.xpath("//*[@placeholder='Address Line']")).sendKeys("test");
        driver.findElement(By.xpath("//*[@placeholder='City']")).sendKeys("Istanbul");
        driver.findElement(By.className("select2-selection__arrow")).click();
        driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys(benCountry);
        driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys(Keys.ENTER);
        driver.findElement(By.xpath("//*[@placeholder='Post Code']")).sendKeys("43455");
        sleep(3);
        driver.findElement(By.xpath("//*[@type='submit']")).click();

    }

    public void OverviewPage() throws InterruptedException {
        sleep(3);
        driver.findElement(By.xpath("//*[@type='submit']")).click();
    }

    public void CheckIfBeneficiarySuccessful() {

        waitPresence(By.xpath("//*[text()=' was successfully ']"));
        String successMesagge = driver.findElement(By.xpath("//*[text()=' was successfully ']")).getText();
        assertEquals(successMesagge, "was successfully");
    }

    public void SettingsPageDhb(String bankCountry) throws InterruptedException {
        waitPresence(By.id("select2-currency-container"));
        driver.findElement(By.id("select2-countryId-container")).click();
        driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys(bankCountry);
        driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys(Keys.ENTER);
        driver.findElement(By.xpath("//*[@type='submit']")).click();
        sleep(2);
    }

    public void BankDetailsPageDHB(String bankCountry) throws InterruptedException {
        if (bankCountry.contains("United Kingdom")) {
            sleep(2);
            waitPresence(By.xpath(AccountHolderNameXpath));
            driver.findElement(By.xpath(AccountHolderNameXpath)).sendKeys("TestUk");
            driver.findElement(By.xpath(IbanXpath)).sendKeys("GB89BARC20320023233545");
            driver.findElement(By.xpath(BICSWIFTXpath)).sendKeys("ANTSGB2L");
        } else if (bankCountry.contains("Germany")) {
            sleep(2);
            waitPresence(By.xpath(AccountHolderNameXpath));
            driver.findElement(By.xpath(AccountHolderNameXpath)).sendKeys("TestGermany");
            driver.findElement(By.xpath(IbanXpath)).sendKeys("DE89370400440532013000");
            driver.findElement(By.xpath(BICSWIFTXpath)).sendKeys("AARBDE5W100");
        } else if (bankCountry.contains("Malta")) {
            sleep(2);
            waitPresence(By.xpath(AccountHolderNameXpath));
            driver.findElement(By.xpath(AccountHolderNameXpath)).sendKeys("TestMalta");
            driver.findElement(By.xpath(IbanXpath)).sendKeys("MT31MALT01100000000000000000123");
            driver.findElement(By.xpath(BICSWIFTXpath)).sendKeys("AKBKMTMTXXX");
        } else if (bankCountry.contains("Norway")) {
            sleep(2);
            waitPresence(By.xpath(AccountHolderNameXpath));
            driver.findElement(By.xpath(AccountHolderNameXpath)).sendKeys("TestNorway");
            driver.findElement(By.xpath(IbanXpath)).sendKeys("NO8330001234567");
            driver.findElement(By.xpath(BICSWIFTXpath)).sendKeys("CITINOKXXXX");
        } else if (bankCountry.contains("Belgium")) {
            sleep(2);
            waitPresence(By.xpath(AccountHolderNameXpath));
            driver.findElement(By.xpath(AccountHolderNameXpath)).sendKeys("TestBelgium");
            driver.findElement(By.xpath(IbanXpath)).sendKeys("BE68539007547034");
            driver.findElement(By.xpath(BICSWIFTXpath)).sendKeys("BBRUBEBB010");
        }
        driver.findElement(By.xpath("//*[@type='submit']")).click();
    }

    public void BeneficiaryPageDHB(String benCountry) throws InterruptedException {
        waitPresence(By.xpath("//*[@placeholder='Business Name']"));
        driver.findElement(By.xpath("//*[@placeholder='Business Name']")).sendKeys("Test");
        driver.findElement(By.xpath("//*[@placeholder='Email']")).sendKeys("test@com.com");
        driver.findElement(By.xpath("//*[@placeholder='Beneficiary Nickname']")).sendKeys("test");
        sleep(2);
        driver.findElement(By.className("select2-selection__arrow")).click();
        sleep(1);
        driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys(benCountry);
        driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys(Keys.ENTER);
        sleep(3);
        driver.findElement(By.xpath("//*[@type='submit']")).click();

    }

    public void BankDetailsPageClearBank(String payment) throws InterruptedException { {
            sleep(2);
            driver.findElement(By.xpath("//*[text()='" + payment + "']")).click();
            waitPresence(By.xpath(AccountHolderNameXpath));
            driver.findElement(By.xpath(AccountHolderNameXpath)).sendKeys("Test1234");
            driver.findElement(By.xpath("//*[@placeholder='Sort Code']")).sendKeys("074456");
            driver.findElement(By.xpath("//*[@placeholder='Account Number']")).sendKeys("23233545");
            driver.findElement(By.xpath("//*[@type='submit']")).click();
    }
    }

    public void BankDetailsPageOnpex(String payment) throws InterruptedException{
        sleep(2);
        driver.findElement(By.xpath("//*[text()='" + payment + "']")).click();
        driver.findElement(By.xpath("//*[text()='" + payment + "']")).click();
        waitPresence(By.xpath(AccountHolderNameXpath));
        driver.findElement(By.xpath(AccountHolderNameXpath)).sendKeys("Test1234");
        driver.findElement(By.xpath("//input[@id='iban-0']")).sendKeys("GB66CLRB04050900096362");
        driver.findElement(By.xpath("//input[@id='bic-0']")).sendKeys("CPRTGB22");
        driver.findElement(By.xpath("//*[@type='submit']")).click();
    }

    public void BeneficiaryPageOnpex(String benCountry) throws InterruptedException{
        waitPresence(By.xpath("//*[@placeholder='Business Name']"));
        driver.findElement(By.xpath("//*[@placeholder='Business Name']")).sendKeys("Test");
        driver.findElement(By.xpath("//*[@placeholder='Email']")).sendKeys("test@com.com");
        driver.findElement(By.xpath("//input[@id='line-0']")).sendKeys("test");
        driver.findElement(By.xpath("//input[@id='city-0']")).sendKeys("test");
        driver.findElement(By.xpath("//input[@id='postalCode-0']")).sendKeys("test");
        driver.findElement(By.xpath("//*[@placeholder='Beneficiary Nickname']")).sendKeys("test");
        sleep(2);
        driver.findElement(By.className("select2-selection__arrow")).click();
        sleep(1);
        driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys(benCountry);
        driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys(Keys.ENTER);
        sleep(3);
        driver.findElement(By.xpath("//*[@type='submit']")).click();
        sleep(1 );
        driver.findElement(By.xpath("//a[contains(text(),'Beneficiaries')]")).click();
        driver.findElement(By.xpath("//div[@class='clearfix']//div[1]//span[4]//div[1]//a[3]")).click();
        driver.findElement(By.xpath("//body//input[2]")).click();


    }
}

