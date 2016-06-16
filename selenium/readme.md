# Selenium Kurulum

`selenium-server-standalone-x.x.x.jar` dosyası selenium web sitesinden indirilmelidir.

Selenium default olarak mozilla ile çalışmaktadır. Diğer browser'lar ile çalışması için driver'larının indirilmesi gerekmektedir.

## Chrome Desteği
Chrome ile çalışmak için `chromedriver.exe` uygulamasını selenium sitesinden indirilip bu dizine kopyalanması gerekmektedir.

## Internet Expolorer Desteği
IE ile çalışmak için `IEDriverServer.exe` uygulamasını selenium sitesinden indirilip bu dizine kopyalanması gerekmektedir. 

Ancak IE'nin çalışması için ayrıca aşağıdaki ayarların yapılması gerekmektedir;
* Internet Options > Security bölümü çaılır
* Tüm Zone alanları için en alttaki "Enable Protected Mode" checkbox'ı aynı değerde olmalıdır.

**64 bit driver text input işlemlerinde çok yavaş çalışmaktadır. Bu nedenle 32-bit driver'ın indirilmesi tavsiye edilir.**

## NightWatch kurulum
Driver'ları indirdikten sonra `nightwatch.json` dosyasında aşağıdaki ayarların yapılmış olması gerekir.

```json
{
  ....
  "selenium" : {
	....
	"cli_args" : {
      "webdriver.chrome.driver" : "selenium/chromedriver.exe",
      "webdriver.ie.driver" : "selenium/IEDriverServer_32bit.exe"
    }
  },

  "test_settings" : {
    "default" : {
		....
		"desiredCapabilities": {
        "browserName": "firefox",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },

    "chrome" : { 
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },
    
    "ie" : { 
      "desiredCapabilities": {
        "browserName": "internet explorer",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    }
  }
}

```

**IE için bu configürasyon dosyasın "internet explorer" yazması gerekmektedir.**