$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Payment.feature");
formatter.feature({
  "line": 1,
  "name": "Success Payment",
  "description": "",
  "id": "success-payment",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Successfully Payment",
  "description": "",
  "id": "success-payment;successfully-payment",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@halo100"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am a \"\u003cuser\u003e\" of SettleGo with twoFactor disabled",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I log in using valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User makes payment with the \"\u003ccurrency\u003e\" and \"\u003cbeneficiary\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Payment should be successful.",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "success-payment;successfully-payment;",
  "rows": [
    {
      "cells": [
        "user",
        "currency",
        "beneficiary"
      ],
      "line": 11,
      "id": "success-payment;successfully-payment;;1"
    },
    {
      "cells": [
        "clearcumaa1@com.com",
        "British Pound",
        "ClbAutomation"
      ],
      "line": 12,
      "id": "success-payment;successfully-payment;;2"
    },
    {
      "cells": [
        "clearcumaa1@com.com",
        "Euro",
        "DhbAutomation"
      ],
      "line": 13,
      "id": "success-payment;successfully-payment;;3"
    },
    {
      "cells": [
        "clearcumaa1@com.com",
        "Canadian Dollar",
        "OnpexAutomation"
      ],
      "line": 14,
      "id": "success-payment;successfully-payment;;4"
    },
    {
      "cells": [
        "lhvberk1@com.com",
        "Euro",
        "Lhvautomation"
      ],
      "line": 15,
      "id": "success-payment;successfully-payment;;5"
    },
    {
      "cells": [
        "michelturnosol1@yopmail.com",
        "Euro",
        "BBSAutomation"
      ],
      "line": 16,
      "id": "success-payment;successfully-payment;;6"
    },
    {
      "cells": [
        "michelpub1@yopmail.com",
        "Euro",
        "FmxAutomation"
      ],
      "line": 17,
      "id": "success-payment;successfully-payment;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3690397689,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Successfully Payment",
  "description": "",
  "id": "success-payment;successfully-payment;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@halo100"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am a \"clearcumaa1@com.com\" of SettleGo with twoFactor disabled",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I log in using valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User makes payment with the \"British Pound\" and \"ClbAutomation\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Payment should be successful.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "clearcumaa1@com.com",
      "offset": 8
    }
  ],
  "location": "LoginSteps.i_am_a_of_SettleGo_with_twoFactor_disabled(String)"
});
formatter.result({
  "duration": 9120141785,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_log_in_using_valid_credentials()"
});
formatter.result({
  "duration": 225021,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "British Pound",
      "offset": 29
    },
    {
      "val": "ClbAutomation",
      "offset": 49
    }
  ],
  "location": "PaymentSteps.userMakesPaymentWithTheAnd(String,String)"
});
formatter.result({
  "duration": 30199957098,
  "status": "passed"
});
formatter.match({
  "location": "PaymentSteps.paymentShouldBeSuccessful()"
});
formatter.result({
  "duration": 93764246,
  "status": "passed"
});
formatter.after({
  "duration": 319125181,
  "status": "passed"
});
formatter.before({
  "duration": 2015745169,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Successfully Payment",
  "description": "",
  "id": "success-payment;successfully-payment;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@halo100"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am a \"clearcumaa1@com.com\" of SettleGo with twoFactor disabled",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I log in using valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User makes payment with the \"Euro\" and \"DhbAutomation\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Payment should be successful.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "clearcumaa1@com.com",
      "offset": 8
    }
  ],
  "location": "LoginSteps.i_am_a_of_SettleGo_with_twoFactor_disabled(String)"
});
formatter.result({
  "duration": 10503192941,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_log_in_using_valid_credentials()"
});
formatter.result({
  "duration": 242466,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Euro",
      "offset": 29
    },
    {
      "val": "DhbAutomation",
      "offset": 40
    }
  ],
  "location": "PaymentSteps.userMakesPaymentWithTheAnd(String,String)"
});
formatter.result({
  "duration": 30180601861,
  "status": "passed"
});
formatter.match({
  "location": "PaymentSteps.paymentShouldBeSuccessful()"
});
formatter.result({
  "duration": 77565082,
  "status": "passed"
});
formatter.after({
  "duration": 338509802,
  "status": "passed"
});
formatter.before({
  "duration": 1584994871,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Successfully Payment",
  "description": "",
  "id": "success-payment;successfully-payment;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@halo100"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am a \"clearcumaa1@com.com\" of SettleGo with twoFactor disabled",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I log in using valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User makes payment with the \"Canadian Dollar\" and \"OnpexAutomation\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Payment should be successful.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "clearcumaa1@com.com",
      "offset": 8
    }
  ],
  "location": "LoginSteps.i_am_a_of_SettleGo_with_twoFactor_disabled(String)"
});
formatter.result({
  "duration": 9072957462,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_log_in_using_valid_credentials()"
});
formatter.result({
  "duration": 51278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Canadian Dollar",
      "offset": 29
    },
    {
      "val": "OnpexAutomation",
      "offset": 51
    }
  ],
  "location": "PaymentSteps.userMakesPaymentWithTheAnd(String,String)"
});
formatter.result({
  "duration": 30192596750,
  "status": "passed"
});
formatter.match({
  "location": "PaymentSteps.paymentShouldBeSuccessful()"
});
formatter.result({
  "duration": 77179100,
  "status": "passed"
});
formatter.after({
  "duration": 314776675,
  "status": "passed"
});
formatter.before({
  "duration": 1764785606,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Successfully Payment",
  "description": "",
  "id": "success-payment;successfully-payment;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@halo100"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am a \"lhvberk1@com.com\" of SettleGo with twoFactor disabled",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I log in using valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User makes payment with the \"Euro\" and \"Lhvautomation\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Payment should be successful.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "lhvberk1@com.com",
      "offset": 8
    }
  ],
  "location": "LoginSteps.i_am_a_of_SettleGo_with_twoFactor_disabled(String)"
});
formatter.result({
  "duration": 8934782130,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_log_in_using_valid_credentials()"
});
formatter.result({
  "duration": 2006389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Euro",
      "offset": 29
    },
    {
      "val": "Lhvautomation",
      "offset": 40
    }
  ],
  "location": "PaymentSteps.userMakesPaymentWithTheAnd(String,String)"
});
formatter.result({
  "duration": 30225739857,
  "status": "passed"
});
formatter.match({
  "location": "PaymentSteps.paymentShouldBeSuccessful()"
});
formatter.result({
  "duration": 96606090,
  "status": "passed"
});
formatter.after({
  "duration": 299749918,
  "status": "passed"
});
formatter.before({
  "duration": 1759780408,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Successfully Payment",
  "description": "",
  "id": "success-payment;successfully-payment;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@halo100"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am a \"michelturnosol1@yopmail.com\" of SettleGo with twoFactor disabled",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I log in using valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User makes payment with the \"Euro\" and \"BBSAutomation\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Payment should be successful.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "michelturnosol1@yopmail.com",
      "offset": 8
    }
  ],
  "location": "LoginSteps.i_am_a_of_SettleGo_with_twoFactor_disabled(String)"
});
formatter.result({
  "duration": 10282282591,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_log_in_using_valid_credentials()"
});
formatter.result({
  "duration": 51081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Euro",
      "offset": 29
    },
    {
      "val": "BBSAutomation",
      "offset": 40
    }
  ],
  "location": "PaymentSteps.userMakesPaymentWithTheAnd(String,String)"
});
formatter.result({
  "duration": 30123366568,
  "status": "passed"
});
formatter.match({
  "location": "PaymentSteps.paymentShouldBeSuccessful()"
});
formatter.result({
  "duration": 68089385,
  "status": "passed"
});
formatter.after({
  "duration": 252450373,
  "status": "passed"
});
formatter.before({
  "duration": 1821689120,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Successfully Payment",
  "description": "",
  "id": "success-payment;successfully-payment;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@halo100"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am a \"michelpub1@yopmail.com\" of SettleGo with twoFactor disabled",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I log in using valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User makes payment with the \"Euro\" and \"FmxAutomation\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Payment should be successful.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "michelpub1@yopmail.com",
      "offset": 8
    }
  ],
  "location": "LoginSteps.i_am_a_of_SettleGo_with_twoFactor_disabled(String)"
});
formatter.result({
  "duration": 8657091725,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_log_in_using_valid_credentials()"
});
formatter.result({
  "duration": 44679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Euro",
      "offset": 29
    },
    {
      "val": "FmxAutomation",
      "offset": 40
    }
  ],
  "location": "PaymentSteps.userMakesPaymentWithTheAnd(String,String)"
});
formatter.result({
  "duration": 30120914287,
  "status": "passed"
});
formatter.match({
  "location": "PaymentSteps.paymentShouldBeSuccessful()"
});
formatter.result({
  "duration": 76005578,
  "status": "passed"
});
formatter.after({
  "duration": 247715310,
  "status": "passed"
});
});