Feature: Payout

  Successfully Payout


  Scenario Outline: Successfully Create Payout
    Given User navigates to settlego backoffice website
    And "<user>" login to Backoffice
    When Select Client "<ClientID>" and ClientUser "<ClientUser>"select Currency "<currency>" and select beneficiary "<beneficiary>"
    Then Succesfully Create PayOut

    Examples:
      | user                  | ClientID | ClientUser   | currency | beneficiary |
      | canay@eftsoftware.com | 31741    | sari@com.com | Euro     | feepayment  |



