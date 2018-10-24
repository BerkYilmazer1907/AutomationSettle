Feature: Conversion Yaratma - FMX

  Existing settle go user should be able to login

  @halo20
  Scenario Outline: Login into account with correct details
    Given User navigates to settlego website
    When "<kullanici>" login olur
    And Satilacak currency "<sellCurrency>" ve alinacak currency "<buyCurrency>" olan Amount to "<AmountTo>" secilen conversion islemi yapilir
    Then Conversion islemi basarili olmali



    Examples:
      | kullanici                 | sellCurrency  | buyCurrency          | AmountTo |
      | TestAutomation@com.com    | British Pound | Euro                 | Sell     |
      | TestAutomation@com.com    | Euro          | British Pound        | Buy      |
      | TestAutomation@com.com    | Euro          | British Pound        | Sell     |
      | TestAutomation@com.com    | British Pound | Euro                 | Buy      |
      | TestAutomation@com.com    | British Pound | United States Dollar | Sell     |
      | TestAutomation@com.com    | British Pound | United States Dollar | Buy      |
      | TestAutomation@com.com    | British Pound | Hong Kong Dollar     | Sell     |
      | TestAutomation@com.com    | British Pound | Hong Kong Dollar     | Buy      |
      | TestAutomation@com.com    | British Pound | Canadian Dollar      | Sell     |
      | TestAutomation@com.com    | British Pound | Canadian Dollar      | Buy      |
      | TestAutomation@com.com    | Euro          | Canadian Dollar      | Sell     |
      | TestAutomation@com.com    | Euro          | Canadian Dollar      | Buy      |
      | TestAutomationMnx@com.com | British Pound | Euro                 | Sell     |
      | TestAutomationMnx@com.com | Euro          | British Pound        | Buy      |
      | TestAutomationMnx@com.com | Euro          | British Pound        | Sell     |
      | TestAutomationMnx@com.com | British Pound | Euro                 | Buy      |
      | TestAutomationMnx@com.com | British Pound | United States Dollar | Sell     |
      | TestAutomationMnx@com.com | British Pound | United States Dollar | Buy      |
      | TestAutomationMnx@com.com | British Pound | Hong Kong Dollar     | Sell     |
      | TestAutomationMnx@com.com | British Pound | Hong Kong Dollar     | Buy      |
      | TestAutomationMnx@com.com | British Pound | Canadian Dollar      | Sell     |
      | TestAutomationMnx@com.com | British Pound | Canadian Dollar      | Buy      |
      | TestAutomationMnx@com.com | Euro          | Canadian Dollar      | Sell     |
      | TestAutomationMnx@com.com | Euro          | Canadian Dollar      | Buy      |







