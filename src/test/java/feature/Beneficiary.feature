Feature: Beneficiary Ekleme

  Existing settle go user should be able to login

  @halo1
  Scenario Outline: Successfully Add Beneficiary (FMX)
    Given User navigates to settlego website
    When "<kullanici>" login olur
    And Para birimi "<currency>" odeme sekli "<payment>" ve ulkesi "<bankCountry>"ve benulkesi "<benCountry>"olan beneficiary eklenir
    Then Beneficiary eklemesi basarili olmali

    Examples:
      | kullanici              | currency        | payment           | bankCountry    | benCountry     |
      | TestAutomation@com.com | British Pound   | Standard Payments | United Kingdom | United Kingdom |
      | TestAutomation@com.com | British Pound   | Standard Payments | United Kingdom | Germany        |
      | TestAutomation@com.com | British Pound   | Standard Payments | Belarus        | Germany        |
      | TestAutomation@com.com | British Pound   | Standard Payments | Belarus        | United Kingdom |
      | TestAutomation@com.com | British Pound   | Standard Payments | Belarus        | Belarus        |
      | TestAutomation@com.com | British Pound   | Standard Payments | Malta          | Germany        |
      | TestAutomation@com.com | British Pound   | Standard Payments | Malta          | United Kingdom |
      | TestAutomation@com.com | British Pound   | Standard Payments | Malta          | Malta          |
      | TestAutomation@com.com | British Pound   | Standard Payments | United Kingdom | Germany        |
      | TestAutomation@com.com | British Pound   | Standard Payments | United Kingdom | United Kingdom |
      | TestAutomation@com.com | British Pound   | Standard Payments | Germany        | Germany        |
      | TestAutomation@com.com | British Pound   | Standard Payments | Germany        | United Kingdom |
      | TestAutomation@com.com | Euro            | Standard Payments | Malta          | Germany        |
      | TestAutomation@com.com | Euro            | Standard Payments | Malta          | United Kingdom |
      | TestAutomation@com.com | Euro            | Standard Payments | Malta          | Malta          |
      | TestAutomation@com.com | Euro            | Standard Payments | Germany        | Germany        |
      | TestAutomation@com.com | Euro            | Standard Payments | Germany        | United Kingdom |
      | TestAutomation@com.com | Euro            | Standard Payments | Belarus        | Germany        |
      | TestAutomation@com.com | Euro            | Standard Payments | Belarus        | United Kingdom |
      | TestAutomation@com.com | Euro            | Standard Payments | Belarus        | Belarus        |
      | TestAutomation@com.com | Euro            | Standard Payments | Malta          | Germany        |
      | TestAutomation@com.com | Euro            | Standard Payments | Malta          | United Kingdom |
      | TestAutomation@com.com | Euro            | Standard Payments | Malta          | Malta          |
      | TestAutomation@com.com | Canadian Dollar | Standard Payments | Canada         | Germany        |
      | TestAutomation@com.com | Canadian Dollar | Standard Payments | Canada         | United Kingdom |
      | TestAutomation@com.com | Canadian Dollar | Standard Payments | Canada         | United Kingdom |
      | TestAutomation@com.com | Norwegian Krone | Standard Payments | Norway         | Germany        |
      | TestAutomation@com.com | Norwegian Krone | Standard Payments | Norway         | United Kingdom |
      | TestAutomation@com.com | Norwegian Krone | Standard Payments | Norway         | Norway         |


  @halo2
  Scenario Outline: Successfully Add Beneficiary (DHB)
    Given User navigates to settlego website
    When "<kullanici>" login olur
    And Ulkesi "<bankCountry>" ve benulkesi"<benCountry>"olan DHB beneficiary eklenir
    Then Beneficiary eklemesi basarili olmali

    Examples:
      | kullanici                 | bankCountry    | benCountry     |
      | testautomationdhb@com.com | Germany        | Germany        |
      | testautomationdhb@com.com | Germany        | United Kingdom |
      | testautomationdhb@com.com | United Kingdom | Germany        |
      | testautomationdhb@com.com | United Kingdom | United Kingdom |
      | testautomationdhb@com.com | Malta          | United Kingdom |
      | testautomationdhb@com.com | Malta          | Malta          |
      | testautomationdhb@com.com | Norway         | Norway         |
      | testautomationdhb@com.com | Norway         | United Kingdom |
      | testautomationdhb@com.com | Belgium        | United Kingdom |
      | testautomationdhb@com.com | Belgium        | Germany        |

  @halo3
  Scenario Outline: Successfully Add Beneficiary (Contis - Pound)
    Given User navigates to settlego website
    When "<kullanici>" login olur
    And ContisDhb kullanicisi ile para birimi "<currency>" odeme sekli "<payment>" ve ulkesi "<bankCountry>" ve "<benCountry>" olan beneficiary eklenir
    Then Beneficiary eklemesi basarili olmali

    Examples:
      | kullanici       | currency      | payment           | bankCountry    | benCountry     |
      | fmxdhb1@com.com | British Pound | Standard Payments | United Kingdom | United Kingdom |
      | fmxdhb1@com.com | British Pound | Express Payments  | United Kingdom | United Kingdom |
      | fmxdhb1@com.com | British Pound | Standard Payments | United Kingdom | Germany        |
      | fmxdhb1@com.com | British Pound | Express Payments  | United Kingdom | Germany        |
      | fmxdhb1@com.com | British Pound | Express Payments  | United Kingdom | Malta          |
      | fmxdhb1@com.com | British Pound | Express Payments  | United Kingdom | Cyprus         |
      | fmxdhb1@com.com | British Pound | Express Payments  | United Kingdom | Norway         |
      | fmxdhb1@com.com | Euro          | Standard Payments | United Kingdom | Germany        |
      | fmxdhb1@com.com | Euro          | Standard Payments | United Kingdom | Malta          |
      | fmxdhb1@com.com | Euro          | Standard Payments | United Kingdom | Norway         |
      | fmxdhb1@com.com | Euro          | Standard Payments | United Kingdom | Cyprus         |
      | fmxdhb1@com.com | Euro          | Standard Payments | Norway         | United Kingdom |
      | fmxdhb1@com.com | Euro          | Standard Payments | Norway         | Norway         |
      | fmxdhb1@com.com | Euro          | Standard Payments | Cyprus         | Cyprus         |
      | fmxdhb1@com.com | Euro          | Standard Payments | Cyprus         | United Kingdom |
      | fmxdhb1@com.com | Euro          | Standard Payments | Malta          | Malta          |
      | fmxdhb1@com.com | Euro          | Standard Payments | Malta          | United Kingdom |

  @halo4
  Scenario Outline: Successfully Add Beneficiary (MNX)
    Given User navigates to settlego website
    When "<kullanici>" login olur
    And Monex kullanicisi ile para birimi "<currency>" ulkesi "<bankCountry>" ve "<benCountry>" olan beneficiary eklenir
    Then Beneficiary eklemesi basarili olmali

    Examples:
      | kullanici                 | currency        | bankCountry    | benCountry     |
      | TestAutomationMnx@com.com | British Pound   | United Kingdom | United Kingdom |
      | TestAutomationMnx@com.com | British Pound   | United Kingdom | Germany        |
      | TestAutomationMnx@com.com | British Pound   | United Kingdom | Malta          |
      | TestAutomationMnx@com.com | British Pound   | Germany        | Germany        |
      | TestAutomationMnx@com.com | British Pound   | Germany        | United Kingdom |
      | TestAutomationMnx@com.com | Euro            | United Kingdom | United Kingdom |
      | TestAutomationMnx@com.com | Euro            | United Kingdom | Germany        |
      | TestAutomationMnx@com.com | Euro            | United Kingdom | Malta          |
      | TestAutomationMnx@com.com | Euro            | Germany        | Malta          |
      | TestAutomationMnx@com.com | Canadian Dollar | Canada         | Canada         |
      | TestAutomationMnx@com.com | Canadian Dollar | Canada         | United Kingdom |
      | TestAutomationMnx@com.com | Canadian Dollar | Canada         | Malta          |
      | TestAutomationMnx@com.com | Euro            | Malta          | United Kingdom |
      | TestAutomationMnx@com.com | Euro            | Malta          | Germany        |
      | TestAutomationMnx@com.com | Euro            | Norway         | Malta          |
      | TestAutomationMnx@com.com | Euro            | Norway         | United Kingdom |
      | TestAutomationMnx@com.com | Euro            | Belgium        | Malta          |
      | TestAutomationMnx@com.com | Euro            | Belgium        | United Kingdom |
      | TestAutomationMnx@com.com | Norwegian Krone | Norway         | United Kingdom |
      | TestAutomationMnx@com.com | Norwegian Krone | Norway         | Malta          |


  Scenario Outline: Delete Beneficiary
    Given User navigates to settlego website
    When "<kullanici>" login olur
    And Beneficiary silinir
    Then Beneficiary silinmesi basarili olmali
    Examples:
      | kullanici                 |
      | fmxdhb1@com.com           |
      | TestAutomationMnx@com.com |
      | testautomationdhb@com.com |
      | TestAutomation@com.com    |








