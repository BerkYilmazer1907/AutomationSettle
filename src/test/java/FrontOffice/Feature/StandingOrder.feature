Feature: Success Standing Order
  Existing settle go user should be able to login

  Scenario Outline: Daily standing order with enough balance
    Given I am a "<user>" of SettleGo with twoFactor disabled
    When I log in using valid credentials
    And User makes payment with the "<currency>" and "<beneficiary>" and "<paymentschedule>"
    Then Payment Scheduled message should be displayed
    Examples:
      | user         | currency | beneficiary | paymentschedule |
      | sari@com.com | Euro     | feepayment  | Daily           |

