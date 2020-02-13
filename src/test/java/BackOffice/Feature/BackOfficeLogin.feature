Feature: Login into backoffice


  Existing user should be able to login backoffice
  Scenario Outline: Login into account with correct details for backoffice
    Given User navigates to settlego backoffice website
    When "<user>" login to Backoffice
    Then User can successful login to backoffice

    Examples:
      | user                  |
      | canay@eftsoftware.com |

