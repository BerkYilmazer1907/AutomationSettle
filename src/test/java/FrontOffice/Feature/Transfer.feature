Feature: Success Standing Order

  Existing settle go user should be able to login

  Scenario Outline: Transfer with enough balance
    Given I am a "<user>" of SettleGo with twoFactor disabled
    When User select a "<currency>" with the existing "<beneficiary>"
    Then Transfer message should be displayed
    Examples:
      | user         | currency | beneficiary |
      | sari@com.com | Euro     | Spm Son     |








