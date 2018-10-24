Feature: Login into account  /// FMX

  Existing settle go user should be able to login

  Scenario Outline: Login into account with correct details
    Given User navigates to settlego website
    When "<kullanici>" login olur
    Then Kullanici basarili bir sekilde login olmus olmali

    Examples:
      | kullanici              |
      | TestAutomation@com.com |



