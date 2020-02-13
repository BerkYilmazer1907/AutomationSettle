Feature: Login into account


  Scenario Outline: Log in with twoFactor disabled
    Given I am a "<user>" of SettleGo with twoFactor disabled
    When I log in using valid credentials
    Then I should directly be logged in

    Examples:
      | user             |
      | sari@com.com     |
      | lhvtest5@com.com |



