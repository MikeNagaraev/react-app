var webdriver = require('selenium-webdriver'),
    { it, beforeEach, afterEach, describe } = require("selenium-webdriver/testing");
var By = webdriver.By,
    until = webdriver.until;
var driver;

describe('Search form', function () {
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

    it('returns correct search form input', function () {
        var element = driver.findElement(By.css(".searchMovie-input"));
        var testString = "Pulp Fiction";
        element.sendKeys(testString);
        driver.wait(function () {
            return element.getAttribute('value').then(function (txt) {
                return txt == testString
            }, 100);
        });
    });
});

