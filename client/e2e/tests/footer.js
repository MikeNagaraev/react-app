var webdriver = require('selenium-webdriver'),
    { it, beforeEach, afterEach, describe } = require("selenium-webdriver/testing");
var By = webdriver.By,
    until = webdriver.until;
var driver;

describe('Footer', function () {
    this.timeout(50000);
    beforeEach(function () {
        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build();
        driver.get('http://localhost:9000/');
    });

    afterEach(function () {
        driver.quit();
    });

    it('returns correct footer name', function () {
        var element = driver.findElement(By.css(".footer p"));
        var testString = "netflixroulette";
        driver.wait(function () {
            return element.getText().then(function (txt) {
                return txt == testString
            }, 100);
        });
    });
});

