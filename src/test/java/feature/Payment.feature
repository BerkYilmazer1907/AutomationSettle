Feature: Success Payment

  Existing settle go user should be able to login

  @halo10
  Scenario Outline: Successfully Payment (FMX)
    Given User navigates to settlego website
    When "<kullanici>" login olur
    And Para birimi "<currency>" ve beneficiary "<beneficiary>" olan payment yapilir
    Then Payment islemi basarili olmali.
    Examples:
      | kullanici                 | currency      | beneficiary              |
      | TestAutomation@com.com    | Euro          | Automation               |
      | TestAutomation@com.com    | British Pound | AutomationGbp            |
      | TestAutomation@com.com    | Canadian      | AutomationCanada         |
      | TestAutomation@com.com    | Norwegian     | AutomationNorway         |
      | testautomationdhb@com.com | Euro          | AutomationDhbBritish     |
      | testautomationdhb@com.com | Euro          | AutomationDhbGermany     |
      | fmxdhb1@com.com           | British Pound | AutomationContisNor      |
      | fmxdhb1@com.com           | British Pound | AutomationContisGbpExp   |
      | fmxdhb1@com.com           | British Pound | AutomationContisGbp      |
      | TestAutomationMnx@com.com | Euro          | AutomationMnxEuroBritish |
      | TestAutomationMnx@com.com | British Pound | AutomationMnxGBPBritish  |







