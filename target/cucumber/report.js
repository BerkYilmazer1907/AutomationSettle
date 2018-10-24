$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Conversion.feature");
formatter.feature({
  "line": 1,
  "name": "Conversion Yaratma - FMX",
  "description": "\nExisting settle go user should be able to login",
  "id": "conversion-yaratma---fmx",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Login into account with correct details",
  "description": "",
  "id": "conversion-yaratma---fmx;login-into-account-with-correct-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@halo20"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User navigates to settlego website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "\"\u003ckullanici\u003e\" login olur",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Satilacak currency \"\u003csellCurrency\u003e\" ve alinacak currency \"\u003cbuyCurrency\u003e\" olan Amount to \"\u003cAmountTo\u003e\" secilen conversion islemi yapilir",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Conversion islemi basarili olmali",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;",
  "rows": [
    {
      "cells": [
        "kullanici",
        "sellCurrency",
        "buyCurrency",
        "AmountTo"
      ],
      "line": 15,
      "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;1"
    },
    {
      "cells": [
        "TestAutomation@com.com",
        "British Pound",
        "Euro",
        "Sell"
      ],
      "line": 16,
      "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;2"
    },
    {
      "cells": [
        "TestAutomation@com.com",
        "Euro",
        "British Pound",
        "Buy"
      ],
      "line": 17,
      "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;3"
    },
    {
      "cells": [
        "TestAutomation@com.com",
        "Euro",
        "British Pound",
        "Sell"
      ],
      "line": 18,
      "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;4"
    },
    {
      "cells": [
        "TestAutomation@com.com",
        "British Pound",
        "Euro",
        "Buy"
      ],
      "line": 19,
      "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;5"
    },
    {
      "cells": [
        "TestAutomation@com.com",
        "British Pound",
        "United States Dollar",
        "Sell"
      ],
      "line": 20,
      "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;6"
    },
    {
      "cells": [
        "TestAutomation@com.com",
        "British Pound",
        "United States Dollar",
        "Buy"
      ],
      "line": 21,
      "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;7"
    },
    {
      "cells": [
        "TestAutomation@com.com",
        "British Pound",
        "Hong Kong Dollar",
        "Sell"
      ],
      "line": 22,
      "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;8"
    },
    {
      "cells": [
        "TestAutomation@com.com",
        "British Pound",
        "Hong Kong Dollar",
        "Buy"
      ],
      "line": 23,
      "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;9"
    },
    {
      "cells": [
        "TestAutomation@com.com",
        "British Pound",
        "Canadian Dollar",
        "Sell"
      ],
      "line": 24,
      "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;10"
    },
    {
      "cells": [
        "TestAutomation@com.com",
        "British Pound",
        "Canadian Dollar",
        "Buy"
      ],
      "line": 25,
      "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;11"
    },
    {
      "cells": [
        "TestAutomation@com.com",
        "Euro",
        "Canadian Dollar",
        "Sell"
      ],
      "line": 26,
      "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;12"
    },
    {
      "cells": [
        "TestAutomation@com.com",
        "Euro",
        "Canadian Dollar",
        "Buy"
      ],
      "line": 27,
      "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;13"
    },
    {
      "cells": [
        "TestAutomationMnx@com.com",
        "British Pound",
        "Euro",
        "Sell"
      ],
      "line": 28,
      "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;14"
    },
    {
      "cells": [
        "TestAutomationMnx@com.com",
        "Euro",
        "British Pound",
        "Buy"
      ],
      "line": 29,
      "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;15"
    },
    {
      "cells": [
        "TestAutomationMnx@com.com",
        "Euro",
        "British Pound",
        "Sell"
      ],
      "line": 30,
      "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;16"
    },
    {
      "cells": [
        "TestAutomationMnx@com.com",
        "British Pound",
        "Euro",
        "Buy"
      ],
      "line": 31,
      "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;17"
    },
    {
      "cells": [
        "TestAutomationMnx@com.com",
        "British Pound",
        "United States Dollar",
        "Sell"
      ],
      "line": 32,
      "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;18"
    },
    {
      "cells": [
        "TestAutomationMnx@com.com",
        "British Pound",
        "United States Dollar",
        "Buy"
      ],
      "line": 33,
      "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;19"
    },
    {
      "cells": [
        "TestAutomationMnx@com.com",
        "British Pound",
        "Hong Kong Dollar",
        "Sell"
      ],
      "line": 34,
      "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;20"
    },
    {
      "cells": [
        "TestAutomationMnx@com.com",
        "British Pound",
        "Hong Kong Dollar",
        "Buy"
      ],
      "line": 35,
      "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;21"
    },
    {
      "cells": [
        "TestAutomationMnx@com.com",
        "British Pound",
        "Canadian Dollar",
        "Sell"
      ],
      "line": 36,
      "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;22"
    },
    {
      "cells": [
        "TestAutomationMnx@com.com",
        "British Pound",
        "Canadian Dollar",
        "Buy"
      ],
      "line": 37,
      "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;23"
    },
    {
      "cells": [
        "TestAutomationMnx@com.com",
        "Euro",
        "Canadian Dollar",
        "Sell"
      ],
      "line": 38,
      "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;24"
    },
    {
      "cells": [
        "TestAutomationMnx@com.com",
        "Euro",
        "Canadian Dollar",
        "Buy"
      ],
      "line": 39,
      "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;25"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2383405582,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login into account with correct details",
  "description": "",
  "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@halo20"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User navigates to settlego website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "\"TestAutomation@com.com\" login olur",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Satilacak currency \"British Pound\" ve alinacak currency \"Euro\" olan Amount to \"Sell\" secilen conversion islemi yapilir",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Conversion islemi basarili olmali",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigatesToNelevenWebsite()"
});
formatter.result({
  "duration": 4897410406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAutomation@com.com",
      "offset": 1
    }
  ],
  "location": "LoginSteps.loginOlur(String)"
});
formatter.result({
  "duration": 2241697384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "British Pound",
      "offset": 20
    },
    {
      "val": "Euro",
      "offset": 57
    },
    {
      "val": "Sell",
      "offset": 79
    }
  ],
  "location": "ConversionSteps.satilacak_currency_ve_alinacak_currency_olan_Amount_to_secilen_conversion_islemi_yapilir(String,String,String)"
});
formatter.result({
  "duration": 24199232101,
  "status": "passed"
});
formatter.match({
  "location": "ConversionSteps.conversion_islemi_basarili_olmali()"
});
formatter.result({
  "duration": 66003735,
  "status": "passed"
});
formatter.after({
  "duration": 117452077,
  "status": "passed"
});
formatter.before({
  "duration": 1569176041,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login into account with correct details",
  "description": "",
  "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@halo20"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User navigates to settlego website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "\"TestAutomation@com.com\" login olur",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Satilacak currency \"Euro\" ve alinacak currency \"British Pound\" olan Amount to \"Buy\" secilen conversion islemi yapilir",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Conversion islemi basarili olmali",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigatesToNelevenWebsite()"
});
formatter.result({
  "duration": 4754806468,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAutomation@com.com",
      "offset": 1
    }
  ],
  "location": "LoginSteps.loginOlur(String)"
});
formatter.result({
  "duration": 1913148777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Euro",
      "offset": 20
    },
    {
      "val": "British Pound",
      "offset": 48
    },
    {
      "val": "Buy",
      "offset": 79
    }
  ],
  "location": "ConversionSteps.satilacak_currency_ve_alinacak_currency_olan_Amount_to_secilen_conversion_islemi_yapilir(String,String,String)"
});
formatter.result({
  "duration": 24433703685,
  "status": "passed"
});
formatter.match({
  "location": "ConversionSteps.conversion_islemi_basarili_olmali()"
});
formatter.result({
  "duration": 71820241,
  "status": "passed"
});
formatter.after({
  "duration": 110756285,
  "status": "passed"
});
formatter.before({
  "duration": 1395895913,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login into account with correct details",
  "description": "",
  "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@halo20"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User navigates to settlego website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "\"TestAutomation@com.com\" login olur",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Satilacak currency \"Euro\" ve alinacak currency \"British Pound\" olan Amount to \"Sell\" secilen conversion islemi yapilir",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Conversion islemi basarili olmali",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigatesToNelevenWebsite()"
});
formatter.result({
  "duration": 3313510475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAutomation@com.com",
      "offset": 1
    }
  ],
  "location": "LoginSteps.loginOlur(String)"
});
formatter.result({
  "duration": 12016058010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Euro",
      "offset": 20
    },
    {
      "val": "British Pound",
      "offset": 48
    },
    {
      "val": "Sell",
      "offset": 79
    }
  ],
  "location": "ConversionSteps.satilacak_currency_ve_alinacak_currency_olan_Amount_to_secilen_conversion_islemi_yapilir(String,String,String)"
});
formatter.result({
  "duration": 28540797758,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cinput type\u003d\"submit\" class\u003d\"btn-style reverted pull-right full-mobile\" value\u003d\"Get a Quote\" data-reactid\u003d\".0.3.0.0.1.0.1.0.0.6.1\"\u003e is not clickable at point (616, 753). Other element would receive the click: \u003cdiv class\u003d\"loader-overlay\" data-reactid\u003d\".0.4\" style\u003d\"display: block; opacity: 0.666873;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db),platform\u003dMac OS X 10.12.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 48 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027Berk-MacBook-Pro.local\u0027, ip: \u0027192.168.34.126\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.6\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:57688}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db), userDataDir\u003d/var/folders/cl/dp0_2m3s2rx99p5p_z0v_y280000gn/T/.org.chromium.Chromium.0c85wR}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: c61cb8ce3a1d1dc611548a29147a758f\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\n\tat pageobject.ConversionPage.ConversionPage(ConversionPage.java:29)\n\tat steps.ConversionSteps.satilacak_currency_ve_alinacak_currency_olan_Amount_to_secilen_conversion_islemi_yapilir(ConversionSteps.java:19)\n\tat ✽.And Satilacak currency \"Euro\" ve alinacak currency \"British Pound\" olan Amount to \"Sell\" secilen conversion islemi yapilir(Conversion.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "location": "ConversionSteps.conversion_islemi_basarili_olmali()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 45151666025,
  "status": "passed"
});
formatter.before({
  "duration": 1792120392,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Login into account with correct details",
  "description": "",
  "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@halo20"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User navigates to settlego website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "\"TestAutomation@com.com\" login olur",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Satilacak currency \"British Pound\" ve alinacak currency \"Euro\" olan Amount to \"Buy\" secilen conversion islemi yapilir",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Conversion islemi basarili olmali",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigatesToNelevenWebsite()"
});
formatter.result({
  "duration": 3892259699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAutomation@com.com",
      "offset": 1
    }
  ],
  "location": "LoginSteps.loginOlur(String)"
});
formatter.result({
  "duration": 1957747830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "British Pound",
      "offset": 20
    },
    {
      "val": "Euro",
      "offset": 57
    },
    {
      "val": "Buy",
      "offset": 79
    }
  ],
  "location": "ConversionSteps.satilacak_currency_ve_alinacak_currency_olan_Amount_to_secilen_conversion_islemi_yapilir(String,String,String)"
});
formatter.result({
  "duration": 24692532595,
  "status": "passed"
});
formatter.match({
  "location": "ConversionSteps.conversion_islemi_basarili_olmali()"
});
formatter.result({
  "duration": 64061356,
  "status": "passed"
});
formatter.after({
  "duration": 111839599,
  "status": "passed"
});
formatter.before({
  "duration": 1296666187,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Login into account with correct details",
  "description": "",
  "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@halo20"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User navigates to settlego website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "\"TestAutomation@com.com\" login olur",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Satilacak currency \"British Pound\" ve alinacak currency \"United States Dollar\" olan Amount to \"Sell\" secilen conversion islemi yapilir",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Conversion islemi basarili olmali",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigatesToNelevenWebsite()"
});
formatter.result({
  "duration": 2857866541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAutomation@com.com",
      "offset": 1
    }
  ],
  "location": "LoginSteps.loginOlur(String)"
});
formatter.result({
  "duration": 1816008196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "British Pound",
      "offset": 20
    },
    {
      "val": "United States Dollar",
      "offset": 57
    },
    {
      "val": "Sell",
      "offset": 95
    }
  ],
  "location": "ConversionSteps.satilacak_currency_ve_alinacak_currency_olan_Amount_to_secilen_conversion_islemi_yapilir(String,String,String)"
});
formatter.result({
  "duration": 24483101299,
  "status": "passed"
});
formatter.match({
  "location": "ConversionSteps.conversion_islemi_basarili_olmali()"
});
formatter.result({
  "duration": 63300307,
  "status": "passed"
});
formatter.after({
  "duration": 131919887,
  "status": "passed"
});
formatter.before({
  "duration": 1252111537,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Login into account with correct details",
  "description": "",
  "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@halo20"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User navigates to settlego website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "\"TestAutomation@com.com\" login olur",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Satilacak currency \"British Pound\" ve alinacak currency \"United States Dollar\" olan Amount to \"Buy\" secilen conversion islemi yapilir",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Conversion islemi basarili olmali",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigatesToNelevenWebsite()"
});
formatter.result({
  "duration": 2703357571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAutomation@com.com",
      "offset": 1
    }
  ],
  "location": "LoginSteps.loginOlur(String)"
});
formatter.result({
  "duration": 1737730203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "British Pound",
      "offset": 20
    },
    {
      "val": "United States Dollar",
      "offset": 57
    },
    {
      "val": "Buy",
      "offset": 95
    }
  ],
  "location": "ConversionSteps.satilacak_currency_ve_alinacak_currency_olan_Amount_to_secilen_conversion_islemi_yapilir(String,String,String)"
});
formatter.result({
  "duration": 24447495258,
  "status": "passed"
});
formatter.match({
  "location": "ConversionSteps.conversion_islemi_basarili_olmali()"
});
formatter.result({
  "duration": 63395227,
  "status": "passed"
});
formatter.after({
  "duration": 104796318,
  "status": "passed"
});
formatter.before({
  "duration": 1256093750,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Login into account with correct details",
  "description": "",
  "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@halo20"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User navigates to settlego website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "\"TestAutomation@com.com\" login olur",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Satilacak currency \"British Pound\" ve alinacak currency \"Hong Kong Dollar\" olan Amount to \"Sell\" secilen conversion islemi yapilir",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Conversion islemi basarili olmali",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigatesToNelevenWebsite()"
});
formatter.result({
  "duration": 2245548594,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAutomation@com.com",
      "offset": 1
    }
  ],
  "location": "LoginSteps.loginOlur(String)"
});
formatter.result({
  "duration": 1648808567,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "British Pound",
      "offset": 20
    },
    {
      "val": "Hong Kong Dollar",
      "offset": 57
    },
    {
      "val": "Sell",
      "offset": 91
    }
  ],
  "location": "ConversionSteps.satilacak_currency_ve_alinacak_currency_olan_Amount_to_secilen_conversion_islemi_yapilir(String,String,String)"
});
formatter.result({
  "duration": 24361217135,
  "status": "passed"
});
formatter.match({
  "location": "ConversionSteps.conversion_islemi_basarili_olmali()"
});
formatter.result({
  "duration": 63151920,
  "status": "passed"
});
formatter.after({
  "duration": 115180073,
  "status": "passed"
});
formatter.before({
  "duration": 1240602172,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Login into account with correct details",
  "description": "",
  "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@halo20"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User navigates to settlego website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "\"TestAutomation@com.com\" login olur",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Satilacak currency \"British Pound\" ve alinacak currency \"Hong Kong Dollar\" olan Amount to \"Buy\" secilen conversion islemi yapilir",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Conversion islemi basarili olmali",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigatesToNelevenWebsite()"
});
formatter.result({
  "duration": 2036726634,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAutomation@com.com",
      "offset": 1
    }
  ],
  "location": "LoginSteps.loginOlur(String)"
});
formatter.result({
  "duration": 1393143050,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "British Pound",
      "offset": 20
    },
    {
      "val": "Hong Kong Dollar",
      "offset": 57
    },
    {
      "val": "Buy",
      "offset": 91
    }
  ],
  "location": "ConversionSteps.satilacak_currency_ve_alinacak_currency_olan_Amount_to_secilen_conversion_islemi_yapilir(String,String,String)"
});
formatter.result({
  "duration": 24461688425,
  "status": "passed"
});
formatter.match({
  "location": "ConversionSteps.conversion_islemi_basarili_olmali()"
});
formatter.result({
  "duration": 63962825,
  "status": "passed"
});
formatter.after({
  "duration": 180748575,
  "status": "passed"
});
formatter.before({
  "duration": 1267261141,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Login into account with correct details",
  "description": "",
  "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@halo20"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User navigates to settlego website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "\"TestAutomation@com.com\" login olur",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Satilacak currency \"British Pound\" ve alinacak currency \"Canadian Dollar\" olan Amount to \"Sell\" secilen conversion islemi yapilir",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Conversion islemi basarili olmali",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigatesToNelevenWebsite()"
});
formatter.result({
  "duration": 2225541271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAutomation@com.com",
      "offset": 1
    }
  ],
  "location": "LoginSteps.loginOlur(String)"
});
formatter.result({
  "duration": 1470713292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "British Pound",
      "offset": 20
    },
    {
      "val": "Canadian Dollar",
      "offset": 57
    },
    {
      "val": "Sell",
      "offset": 90
    }
  ],
  "location": "ConversionSteps.satilacak_currency_ve_alinacak_currency_olan_Amount_to_secilen_conversion_islemi_yapilir(String,String,String)"
});
formatter.result({
  "duration": 24207906025,
  "status": "passed"
});
formatter.match({
  "location": "ConversionSteps.conversion_islemi_basarili_olmali()"
});
formatter.result({
  "duration": 65884403,
  "status": "passed"
});
formatter.after({
  "duration": 161828448,
  "status": "passed"
});
formatter.before({
  "duration": 1264028806,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Login into account with correct details",
  "description": "",
  "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@halo20"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User navigates to settlego website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "\"TestAutomation@com.com\" login olur",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Satilacak currency \"British Pound\" ve alinacak currency \"Canadian Dollar\" olan Amount to \"Buy\" secilen conversion islemi yapilir",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Conversion islemi basarili olmali",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigatesToNelevenWebsite()"
});
formatter.result({
  "duration": 2202501532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAutomation@com.com",
      "offset": 1
    }
  ],
  "location": "LoginSteps.loginOlur(String)"
});
formatter.result({
  "duration": 1458660991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "British Pound",
      "offset": 20
    },
    {
      "val": "Canadian Dollar",
      "offset": 57
    },
    {
      "val": "Buy",
      "offset": 90
    }
  ],
  "location": "ConversionSteps.satilacak_currency_ve_alinacak_currency_olan_Amount_to_secilen_conversion_islemi_yapilir(String,String,String)"
});
formatter.result({
  "duration": 24181260296,
  "status": "passed"
});
formatter.match({
  "location": "ConversionSteps.conversion_islemi_basarili_olmali()"
});
formatter.result({
  "duration": 64618871,
  "status": "passed"
});
formatter.after({
  "duration": 195013521,
  "status": "passed"
});
formatter.before({
  "duration": 1242077952,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Login into account with correct details",
  "description": "",
  "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;12",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@halo20"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User navigates to settlego website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "\"TestAutomation@com.com\" login olur",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Satilacak currency \"Euro\" ve alinacak currency \"Canadian Dollar\" olan Amount to \"Sell\" secilen conversion islemi yapilir",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Conversion islemi basarili olmali",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigatesToNelevenWebsite()"
});
formatter.result({
  "duration": 3786972810,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAutomation@com.com",
      "offset": 1
    }
  ],
  "location": "LoginSteps.loginOlur(String)"
});
formatter.result({
  "duration": 1570791011,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Euro",
      "offset": 20
    },
    {
      "val": "Canadian Dollar",
      "offset": 48
    },
    {
      "val": "Sell",
      "offset": 81
    }
  ],
  "location": "ConversionSteps.satilacak_currency_ve_alinacak_currency_olan_Amount_to_secilen_conversion_islemi_yapilir(String,String,String)"
});
formatter.result({
  "duration": 24509138622,
  "status": "passed"
});
formatter.match({
  "location": "ConversionSteps.conversion_islemi_basarili_olmali()"
});
formatter.result({
  "duration": 74545655,
  "status": "passed"
});
formatter.after({
  "duration": 141440154,
  "status": "passed"
});
formatter.before({
  "duration": 1354718942,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Login into account with correct details",
  "description": "",
  "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;13",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@halo20"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User navigates to settlego website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "\"TestAutomation@com.com\" login olur",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Satilacak currency \"Euro\" ve alinacak currency \"Canadian Dollar\" olan Amount to \"Buy\" secilen conversion islemi yapilir",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Conversion islemi basarili olmali",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigatesToNelevenWebsite()"
});
formatter.result({
  "duration": 3277930685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAutomation@com.com",
      "offset": 1
    }
  ],
  "location": "LoginSteps.loginOlur(String)"
});
formatter.result({
  "duration": 2118075872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Euro",
      "offset": 20
    },
    {
      "val": "Canadian Dollar",
      "offset": 48
    },
    {
      "val": "Buy",
      "offset": 81
    }
  ],
  "location": "ConversionSteps.satilacak_currency_ve_alinacak_currency_olan_Amount_to_secilen_conversion_islemi_yapilir(String,String,String)"
});
formatter.result({
  "duration": 26279304164,
  "status": "passed"
});
formatter.match({
  "location": "ConversionSteps.conversion_islemi_basarili_olmali()"
});
formatter.result({
  "duration": 67437980,
  "status": "passed"
});
formatter.after({
  "duration": 99537970,
  "status": "passed"
});
formatter.before({
  "duration": 1354858032,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Login into account with correct details",
  "description": "",
  "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;14",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@halo20"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User navigates to settlego website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "\"TestAutomationMnx@com.com\" login olur",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Satilacak currency \"British Pound\" ve alinacak currency \"Euro\" olan Amount to \"Sell\" secilen conversion islemi yapilir",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Conversion islemi basarili olmali",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigatesToNelevenWebsite()"
});
formatter.result({
  "duration": 2287339873,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAutomationMnx@com.com",
      "offset": 1
    }
  ],
  "location": "LoginSteps.loginOlur(String)"
});
formatter.result({
  "duration": 1985379248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "British Pound",
      "offset": 20
    },
    {
      "val": "Euro",
      "offset": 57
    },
    {
      "val": "Sell",
      "offset": 79
    }
  ],
  "location": "ConversionSteps.satilacak_currency_ve_alinacak_currency_olan_Amount_to_secilen_conversion_islemi_yapilir(String,String,String)"
});
formatter.result({
  "duration": 24120056508,
  "status": "passed"
});
formatter.match({
  "location": "ConversionSteps.conversion_islemi_basarili_olmali()"
});
formatter.result({
  "duration": 66914520,
  "status": "passed"
});
formatter.after({
  "duration": 124363251,
  "status": "passed"
});
formatter.before({
  "duration": 1285647907,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Login into account with correct details",
  "description": "",
  "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;15",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@halo20"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User navigates to settlego website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "\"TestAutomationMnx@com.com\" login olur",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Satilacak currency \"Euro\" ve alinacak currency \"British Pound\" olan Amount to \"Buy\" secilen conversion islemi yapilir",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Conversion islemi basarili olmali",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigatesToNelevenWebsite()"
});
formatter.result({
  "duration": 2281058180,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAutomationMnx@com.com",
      "offset": 1
    }
  ],
  "location": "LoginSteps.loginOlur(String)"
});
formatter.result({
  "duration": 1263774133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Euro",
      "offset": 20
    },
    {
      "val": "British Pound",
      "offset": 48
    },
    {
      "val": "Buy",
      "offset": 79
    }
  ],
  "location": "ConversionSteps.satilacak_currency_ve_alinacak_currency_olan_Amount_to_secilen_conversion_islemi_yapilir(String,String,String)"
});
formatter.result({
  "duration": 24816819865,
  "status": "passed"
});
formatter.match({
  "location": "ConversionSteps.conversion_islemi_basarili_olmali()"
});
formatter.result({
  "duration": 63946693,
  "status": "passed"
});
formatter.after({
  "duration": 131695918,
  "status": "passed"
});
formatter.before({
  "duration": 1234177436,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Login into account with correct details",
  "description": "",
  "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;16",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@halo20"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User navigates to settlego website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "\"TestAutomationMnx@com.com\" login olur",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Satilacak currency \"Euro\" ve alinacak currency \"British Pound\" olan Amount to \"Sell\" secilen conversion islemi yapilir",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Conversion islemi basarili olmali",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigatesToNelevenWebsite()"
});
formatter.result({
  "duration": 2215140272,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAutomationMnx@com.com",
      "offset": 1
    }
  ],
  "location": "LoginSteps.loginOlur(String)"
});
formatter.result({
  "duration": 2249567709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Euro",
      "offset": 20
    },
    {
      "val": "British Pound",
      "offset": 48
    },
    {
      "val": "Sell",
      "offset": 79
    }
  ],
  "location": "ConversionSteps.satilacak_currency_ve_alinacak_currency_olan_Amount_to_secilen_conversion_islemi_yapilir(String,String,String)"
});
formatter.result({
  "duration": 24078354744,
  "status": "passed"
});
formatter.match({
  "location": "ConversionSteps.conversion_islemi_basarili_olmali()"
});
formatter.result({
  "duration": 63263393,
  "status": "passed"
});
formatter.after({
  "duration": 196016494,
  "status": "passed"
});
formatter.before({
  "duration": 1279538661,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Login into account with correct details",
  "description": "",
  "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;17",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@halo20"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User navigates to settlego website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "\"TestAutomationMnx@com.com\" login olur",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Satilacak currency \"British Pound\" ve alinacak currency \"Euro\" olan Amount to \"Buy\" secilen conversion islemi yapilir",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Conversion islemi basarili olmali",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigatesToNelevenWebsite()"
});
formatter.result({
  "duration": 2182576342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAutomationMnx@com.com",
      "offset": 1
    }
  ],
  "location": "LoginSteps.loginOlur(String)"
});
formatter.result({
  "duration": 2532279375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "British Pound",
      "offset": 20
    },
    {
      "val": "Euro",
      "offset": 57
    },
    {
      "val": "Buy",
      "offset": 79
    }
  ],
  "location": "ConversionSteps.satilacak_currency_ve_alinacak_currency_olan_Amount_to_secilen_conversion_islemi_yapilir(String,String,String)"
});
formatter.result({
  "duration": 23811283017,
  "status": "passed"
});
formatter.match({
  "location": "ConversionSteps.conversion_islemi_basarili_olmali()"
});
formatter.result({
  "duration": 63321571,
  "status": "passed"
});
formatter.after({
  "duration": 115749246,
  "status": "passed"
});
formatter.before({
  "duration": 1389340322,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Login into account with correct details",
  "description": "",
  "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;18",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@halo20"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User navigates to settlego website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "\"TestAutomationMnx@com.com\" login olur",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Satilacak currency \"British Pound\" ve alinacak currency \"United States Dollar\" olan Amount to \"Sell\" secilen conversion islemi yapilir",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Conversion islemi basarili olmali",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigatesToNelevenWebsite()"
});
formatter.result({
  "duration": 2395464732,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAutomationMnx@com.com",
      "offset": 1
    }
  ],
  "location": "LoginSteps.loginOlur(String)"
});
formatter.result({
  "duration": 1332639685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "British Pound",
      "offset": 20
    },
    {
      "val": "United States Dollar",
      "offset": 57
    },
    {
      "val": "Sell",
      "offset": 95
    }
  ],
  "location": "ConversionSteps.satilacak_currency_ve_alinacak_currency_olan_Amount_to_secilen_conversion_islemi_yapilir(String,String,String)"
});
formatter.result({
  "duration": 24249697479,
  "status": "passed"
});
formatter.match({
  "location": "ConversionSteps.conversion_islemi_basarili_olmali()"
});
formatter.result({
  "duration": 63123188,
  "status": "passed"
});
formatter.after({
  "duration": 106141704,
  "status": "passed"
});
formatter.before({
  "duration": 1300627498,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Login into account with correct details",
  "description": "",
  "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;19",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@halo20"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User navigates to settlego website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "\"TestAutomationMnx@com.com\" login olur",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Satilacak currency \"British Pound\" ve alinacak currency \"United States Dollar\" olan Amount to \"Buy\" secilen conversion islemi yapilir",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Conversion islemi basarili olmali",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigatesToNelevenWebsite()"
});
formatter.result({
  "duration": 2267838699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAutomationMnx@com.com",
      "offset": 1
    }
  ],
  "location": "LoginSteps.loginOlur(String)"
});
formatter.result({
  "duration": 1422146491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "British Pound",
      "offset": 20
    },
    {
      "val": "United States Dollar",
      "offset": 57
    },
    {
      "val": "Buy",
      "offset": 95
    }
  ],
  "location": "ConversionSteps.satilacak_currency_ve_alinacak_currency_olan_Amount_to_secilen_conversion_islemi_yapilir(String,String,String)"
});
formatter.result({
  "duration": 24601282952,
  "status": "passed"
});
formatter.match({
  "location": "ConversionSteps.conversion_islemi_basarili_olmali()"
});
formatter.result({
  "duration": 85438396,
  "status": "passed"
});
formatter.after({
  "duration": 159856695,
  "status": "passed"
});
formatter.before({
  "duration": 1266068447,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Login into account with correct details",
  "description": "",
  "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;20",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@halo20"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User navigates to settlego website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "\"TestAutomationMnx@com.com\" login olur",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Satilacak currency \"British Pound\" ve alinacak currency \"Hong Kong Dollar\" olan Amount to \"Sell\" secilen conversion islemi yapilir",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Conversion islemi basarili olmali",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigatesToNelevenWebsite()"
});
formatter.result({
  "duration": 2165068692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAutomationMnx@com.com",
      "offset": 1
    }
  ],
  "location": "LoginSteps.loginOlur(String)"
});
formatter.result({
  "duration": 1898735087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "British Pound",
      "offset": 20
    },
    {
      "val": "Hong Kong Dollar",
      "offset": 57
    },
    {
      "val": "Sell",
      "offset": 91
    }
  ],
  "location": "ConversionSteps.satilacak_currency_ve_alinacak_currency_olan_Amount_to_secilen_conversion_islemi_yapilir(String,String,String)"
});
formatter.result({
  "duration": 24236031749,
  "status": "passed"
});
formatter.match({
  "location": "ConversionSteps.conversion_islemi_basarili_olmali()"
});
formatter.result({
  "duration": 65351235,
  "status": "passed"
});
formatter.after({
  "duration": 133340165,
  "status": "passed"
});
formatter.before({
  "duration": 1378148595,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Login into account with correct details",
  "description": "",
  "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;21",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@halo20"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User navigates to settlego website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "\"TestAutomationMnx@com.com\" login olur",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Satilacak currency \"British Pound\" ve alinacak currency \"Hong Kong Dollar\" olan Amount to \"Buy\" secilen conversion islemi yapilir",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Conversion islemi basarili olmali",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigatesToNelevenWebsite()"
});
formatter.result({
  "duration": 2206615553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAutomationMnx@com.com",
      "offset": 1
    }
  ],
  "location": "LoginSteps.loginOlur(String)"
});
formatter.result({
  "duration": 2176210339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "British Pound",
      "offset": 20
    },
    {
      "val": "Hong Kong Dollar",
      "offset": 57
    },
    {
      "val": "Buy",
      "offset": 91
    }
  ],
  "location": "ConversionSteps.satilacak_currency_ve_alinacak_currency_olan_Amount_to_secilen_conversion_islemi_yapilir(String,String,String)"
});
formatter.result({
  "duration": 24543892236,
  "status": "passed"
});
formatter.match({
  "location": "ConversionSteps.conversion_islemi_basarili_olmali()"
});
formatter.result({
  "duration": 64123249,
  "status": "passed"
});
formatter.after({
  "duration": 100479387,
  "status": "passed"
});
formatter.before({
  "duration": 966214805,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Login into account with correct details",
  "description": "",
  "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;22",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@halo20"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User navigates to settlego website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "\"TestAutomationMnx@com.com\" login olur",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Satilacak currency \"British Pound\" ve alinacak currency \"Canadian Dollar\" olan Amount to \"Sell\" secilen conversion islemi yapilir",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Conversion islemi basarili olmali",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigatesToNelevenWebsite()"
});
formatter.result({
  "duration": 2292750736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAutomationMnx@com.com",
      "offset": 1
    }
  ],
  "location": "LoginSteps.loginOlur(String)"
});
formatter.result({
  "duration": 1414672892,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "British Pound",
      "offset": 20
    },
    {
      "val": "Canadian Dollar",
      "offset": 57
    },
    {
      "val": "Sell",
      "offset": 90
    }
  ],
  "location": "ConversionSteps.satilacak_currency_ve_alinacak_currency_olan_Amount_to_secilen_conversion_islemi_yapilir(String,String,String)"
});
formatter.result({
  "duration": 25504009683,
  "status": "passed"
});
formatter.match({
  "location": "ConversionSteps.conversion_islemi_basarili_olmali()"
});
formatter.result({
  "duration": 64598943,
  "status": "passed"
});
formatter.after({
  "duration": 107857388,
  "status": "passed"
});
formatter.before({
  "duration": 991135717,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Login into account with correct details",
  "description": "",
  "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;23",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@halo20"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User navigates to settlego website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "\"TestAutomationMnx@com.com\" login olur",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Satilacak currency \"British Pound\" ve alinacak currency \"Canadian Dollar\" olan Amount to \"Buy\" secilen conversion islemi yapilir",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Conversion islemi basarili olmali",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigatesToNelevenWebsite()"
});
formatter.result({
  "duration": 2133636141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAutomationMnx@com.com",
      "offset": 1
    }
  ],
  "location": "LoginSteps.loginOlur(String)"
});
formatter.result({
  "duration": 1292999926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "British Pound",
      "offset": 20
    },
    {
      "val": "Canadian Dollar",
      "offset": 57
    },
    {
      "val": "Buy",
      "offset": 90
    }
  ],
  "location": "ConversionSteps.satilacak_currency_ve_alinacak_currency_olan_Amount_to_secilen_conversion_islemi_yapilir(String,String,String)"
});
formatter.result({
  "duration": 24693755210,
  "status": "passed"
});
formatter.match({
  "location": "ConversionSteps.conversion_islemi_basarili_olmali()"
});
formatter.result({
  "duration": 64565169,
  "status": "passed"
});
formatter.after({
  "duration": 158635735,
  "status": "passed"
});
formatter.before({
  "duration": 941032259,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Login into account with correct details",
  "description": "",
  "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;24",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@halo20"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User navigates to settlego website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "\"TestAutomationMnx@com.com\" login olur",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Satilacak currency \"Euro\" ve alinacak currency \"Canadian Dollar\" olan Amount to \"Sell\" secilen conversion islemi yapilir",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Conversion islemi basarili olmali",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigatesToNelevenWebsite()"
});
formatter.result({
  "duration": 3855142002,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAutomationMnx@com.com",
      "offset": 1
    }
  ],
  "location": "LoginSteps.loginOlur(String)"
});
formatter.result({
  "duration": 1632360824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Euro",
      "offset": 20
    },
    {
      "val": "Canadian Dollar",
      "offset": 48
    },
    {
      "val": "Sell",
      "offset": 81
    }
  ],
  "location": "ConversionSteps.satilacak_currency_ve_alinacak_currency_olan_Amount_to_secilen_conversion_islemi_yapilir(String,String,String)"
});
formatter.result({
  "duration": 24973344426,
  "status": "passed"
});
formatter.match({
  "location": "ConversionSteps.conversion_islemi_basarili_olmali()"
});
formatter.result({
  "duration": 65875177,
  "status": "passed"
});
formatter.after({
  "duration": 178996398,
  "status": "passed"
});
formatter.before({
  "duration": 995664402,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Login into account with correct details",
  "description": "",
  "id": "conversion-yaratma---fmx;login-into-account-with-correct-details;;25",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@halo20"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User navigates to settlego website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "\"TestAutomationMnx@com.com\" login olur",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Satilacak currency \"Euro\" ve alinacak currency \"Canadian Dollar\" olan Amount to \"Buy\" secilen conversion islemi yapilir",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Conversion islemi basarili olmali",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigatesToNelevenWebsite()"
});
formatter.result({
  "duration": 2924266419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAutomationMnx@com.com",
      "offset": 1
    }
  ],
  "location": "LoginSteps.loginOlur(String)"
});
formatter.result({
  "duration": 1826394762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Euro",
      "offset": 20
    },
    {
      "val": "Canadian Dollar",
      "offset": 48
    },
    {
      "val": "Buy",
      "offset": 81
    }
  ],
  "location": "ConversionSteps.satilacak_currency_ve_alinacak_currency_olan_Amount_to_secilen_conversion_islemi_yapilir(String,String,String)"
});
formatter.result({
  "duration": 24300229066,
  "status": "passed"
});
formatter.match({
  "location": "ConversionSteps.conversion_islemi_basarili_olmali()"
});
formatter.result({
  "duration": 64332444,
  "status": "passed"
});
formatter.after({
  "duration": 131704513,
  "status": "passed"
});
});