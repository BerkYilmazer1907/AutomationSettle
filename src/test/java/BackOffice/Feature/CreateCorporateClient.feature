Feature: Create Client

  Existing backoffice user should be able to login
  Scenario Outline: Successfully Add Client
    Given User navigates to settlego backoffice website
    When "<user>" login to Backoffice
    And Select SP "<serviceProvider>" and clienttype "<clientType>"select VA "<virtualAccount>"
    Then Succesfull Add Client

    Examples:
      | user                  | serviceProvider        | virtualAccount           | clientType    |
      | canay@eftsoftware.com | FMX                    | DHB                      | Corporate     |
