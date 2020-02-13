Feature: Manuel Adjustment

  Successfully Create Manual

  Scenario Outline: Successfully Create Manual Adjustment
    Given User navigates to settlego backoffice website
    And "<user>" login to Backoffice
    When Select Client "<ClientID>" and ServiseProvider "<serviceProvider>"select Currency "<currency>"
    Then Succesfully Create Manual Adjustment

    Examples:
      | user                  | ClientID | serviceProvider | currency |
      | canay@eftsoftware.com | 31741    | FMX             | Euro     |
      | canay@eftsoftware.com | 31741    | FMX             | British  |



