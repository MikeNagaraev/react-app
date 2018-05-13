var webdriver = require('selenium-webdriver'),
    { it, beforeEach, afterEach, describe } = require("selenium-webdriver/testing");
var By = webdriver.By,
    until = webdriver.until;
var driver;

describe('Header', function () {
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

    it('has search form', function () {
        var element = driver.findElement(By.css(".header .searchMovie-form"));
    });

    it('has logo', function () {
        var element = driver.findElement(By.css(".header .logo"));
    });

    it('returns correct logo name', function () {
        var element = driver.findElement(By.css(".header .logo"));
        var testString = "netflixroulette";
        driver.wait(function () {
            return element.getText().then(function (txt) {
                return txt == testString
            }, 100);
        });
    })
});

