Feature: Funds Management
  Successfully Funds Management
  Scenario Outline: Successfully Funds Management
    Given User navigates to settlego backoffice website
    And "<user>" login to Backoffice
    When Service Provider "<serviceProvider>" and SellCurreny "<SellCurrency>"select BuyCurrency "<BuyCurrency>"
    Then Succesfully Create Funds Management

    Examples:
      | user                  | serviceProvider        | SellCurrency  | BuyCurrency    |
      | canay@eftsoftware.com | FMX                    | Euro          | British Pound  |
      | canay@eftsoftware.com | FMX                    | British       | Euro           |



