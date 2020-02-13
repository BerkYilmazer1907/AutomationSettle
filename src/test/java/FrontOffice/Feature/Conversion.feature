Feature: Conversion Yaratma - FMX

  Existing settle go user should be able to login


  Scenario Outline: Login into account with correct details
    Given I am a "<user>" of SettleGo with twoFactor disabled
    When I log in using valid credentials
    And User logs in to Settlego account with enough balance and click Conversions
    And User converts money from GBP "<sellCurrency>" to EUR "<buyCurrency>" AmountTo "<AmountTo>"
    Then Conversion is underway should be displayed



    Examples:
      | user             | sellCurrency  | buyCurrency | AmountTo |
      | lhvtest5@com.com | British Pound | Euro        | Sell     |
      | lhvtest5@com.com | British Pound | Euro        | Buy      |








