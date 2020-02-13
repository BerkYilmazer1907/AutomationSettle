Feature: Beneficiary Ekleme

  Existing settle go user should be able to login


  Scenario Outline: Successfully Add Beneficiary (FMX)
    Given I am a "<user>" of SettleGo with twoFactor disabled
    When I log in using valid credentials
    And Para birimi "<currency>" odeme sekli "<payment>" ve ulkesi "<bankCountry>"ve benulkesi "<benCountry>"olan beneficiary eklenir
    Then Beneficiary eklemesi basarili olmali

    Examples:
      | user                   | currency        | payment           | bankCountry    | benCountry     |
      | TestAutomation@com.com | British Pound   | Standard Payments | United Kingdom | United Kingdom |
      | TestAutomation@com.com | British Pound   | Standard Payments | United Kingdom | Germany        |
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
      | TestAutomation@com.com | Euro            | Standard Payments | Malta          | Germany        |
      | TestAutomation@com.com | Euro            | Standard Payments | Malta          | United Kingdom |
      | TestAutomation@com.com | Euro            | Standard Payments | Malta          | Malta          |
      | TestAutomation@com.com | Canadian Dollar | Standard Payments | Canada         | Germany        |
      | TestAutomation@com.com | Canadian Dollar | Standard Payments | Canada         | United Kingdom |
      | TestAutomation@com.com | Canadian Dollar | Standard Payments | Canada         | United Kingdom |
      | TestAutomation@com.com | Norwegian Krone | Standard Payments | Norway         | Germany        |
      | TestAutomation@com.com | Norwegian Krone | Standard Payments | Norway         | United Kingdom |
      | TestAutomation@com.com | Norwegian Krone | Standard Payments | Norway         | Norway         |


  Scenario Outline: Successfully Add Beneficiary (DHB)
    Given I am a "<user>" of SettleGo with twoFactor disabled
    When I log in using valid credentials
    And Ulkesi "<bankCountry>" ve benulkesi"<benCountry>"olan DHB beneficiary eklenir
    Then Beneficiary eklemesi basarili olmali

    Examples:
      | user                   | bankCountry    | benCountry     |
      | micehlledavid1@com.com | Germany        | Germany        |
      | micehlledavid1@com.com | Germany        | United Kingdom |
      | micehlledavid1@com.com | United Kingdom | Germany        |
      | micehlledavid1@com.com | United Kingdom | United Kingdom |
      | micehlledavid1@com.com | Malta          | United Kingdom |
      | micehlledavid1@com.com | Malta          | Malta          |
      | micehlledavid1@com.com | Norway         | Norway         |
      | micehlledavid1@com.com | Norway         | United Kingdom |
      | micehlledavid1@com.com | Belgium        | United Kingdom |
      | micehlledavid1@com.com | Belgium        | Germany        |


  Scenario Outline: Successfully Add Beneficiary (CLEAR BANK)
    Given I am a "<user>" of SettleGo with twoFactor disabled
    When I log in using valid credentials
    And ClearBank Kullanicisi Ile ParaBirimi "<currency>" Ulkesi "<bankCountry>" odemesekli "<payment>" Ve "<benCountry>" OlanBeneficiaryEklenir
    Then Beneficiary eklemesi basarili olmali

    Examples:
      | user                        | currency      | bankCountry    | payment         | benCountry     |
      | clearbankautomation@com.com | British Pound | United Kingdom | Faster Payments | United Kingdom |
      | clearbankautomation@com.com | British Pound | United Kingdom | CHAPS Payments  | United Kingdom |
      | clearbankautomation@com.com | British Pound | United Kingdom | Faster Payments | Germany        |
      | clearbankautomation@com.com | British Pound | United Kingdom | CHAPS Payments  | Germany        |


  Scenario Outline: Successfully Add Beneficiary (ONPEX)
    Given I am a "<user>" of SettleGo with twoFactor disabled
    When I log in using valid credentials
    And ONPEX user "<currency>" country "<bankCountry>" payment "<payment>" and "<benCountry>" add beneficiary
    Then Beneficiary eklemesi basarili olmali

    Examples:
      | user                       | currency      | bankCountry    | payment        | benCountry     |
      | michellgabrilella1@com.com | British Pound | United Kingdom | SWIFT Payments | United Kingdom |
      | michellgabrilella1@com.com | British Pound | United Kingdom | SWIFT Payments | United Kingdom |
      | michellgabrilella1@com.com | Euro          | United Kingdom | SEPA Payments  | United Kingdom |
      | michellgabrilella1@com.com | Euro          | United Kingdom | SEPA Payments  | United Kingdom |







