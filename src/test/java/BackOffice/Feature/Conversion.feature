Feature: Conversion


  Scenario Outline: Successfully Conversion
    Given User navigates to settlego backoffice website
    And "<user>" login to Backoffice
    When ClientID "<ClientID>" and ClientUser "<ClientUser>" select SellCurrency "<SellCurrency>" select BuyCurrency "<BuyCurrency>" and amount to "<AmountTo>"
    Then Succesfully Conversion

    Examples:
      | user                  | ClientID | ClientUser   | SellCurrency  | BuyCurrency | AmountTo |
      | canay@eftsoftware.com | 31741    | sari@com.com | British Pound | Euro        | Sell     |
      | canay@eftsoftware.com | 31741    | sari@com.com | British Pound | Euro        | Buy      |



