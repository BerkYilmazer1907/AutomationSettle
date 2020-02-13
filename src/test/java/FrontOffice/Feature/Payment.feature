Feature: Success Payment

  @halo100
  Scenario Outline: Successfully Payment
    Given I am a "<user>" of SettleGo with twoFactor disabled
    When I log in using valid credentials
    And User makes payment with the "<currency>" and "<beneficiary>"
    Then Payment should be successful.

    Examples:
      | user                        | currency        | beneficiary     |
      | clearcumaa1@com.com         | British Pound   | ClbAutomation   |
      | clearcumaa1@com.com         | Euro            | DhbAutomation   |
      | clearcumaa1@com.com         | Canadian Dollar | OnpexAutomation |
      | lhvberk1@com.com            | Euro            | Lhvautomation   |
      | michelturnosol1@yopmail.com | Euro            | BBSAutomation   |
      | michelpub1@yopmail.com      | Euro            | FmxAutomation   |





