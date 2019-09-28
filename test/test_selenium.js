const assert = require("assert");
const test = require("selenium-webdriver/testing");
const webdriver = require("selenium-webdriver");
const By = require("selenium-webdriver").By;

let browser;

test.describe("Use-Case 1, Homepage", function() {
    test.beforeEach(function(done) {
        this.timeout(30000);
        browser = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.firefox()).build();

        browser.get("https://emelieaslund.me/");
        done();
    });

    test.afterEach(function(done) {
        browser.quit();
        done();
    });

    test.it("Test Homepage", function(done) {
        // Check correct heading
        browser.findElement(By.css("h1")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, "Min me-app");
            });
        });

        // Check correct URL ending
        browser.getCurrentUrl().then(function(url) {
            assert.ok(url.endsWith("https://emelieaslund.me/"));
        });

        done();
    });

    test.it("Test go to Home", function(done) {
        // Use nav link to go to home page
        browser.findElement(By.linkText("Hem")).then(function(element) {
            element.click();
        });

        // Check correct heading
        browser.findElement(By.css("h1")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, "Min me-app");
            });
        });

        // Check correct URL ending
        browser.getCurrentUrl().then(function(url) {
            assert.ok(url.endsWith("https://emelieaslund.me/"));
        });

        done();
    });
});

// test.describe("Use-case 1", function() {
//
//     test.beforeEach(function(done) {
//         this.timeout(30000);
//         browser = new webdriver.Builder().
//             withCapabilities(webdriver.Capabilities.chrome()).build();
//
//         browser.get("https://emelieaslund.me/reports/");
//         done();
//     });
//
//     test.afterEach(function(done) {
//         browser.quit();
//         done();
//     });

// test.it("Test go from reports to reports week one", function(done) {
//     var weekOneLink = browser.wait(webdriver.until.elementLocated(
// webdriver.By.name('kmom01')), 1000)
//         .then(function(weekOneLink) {
//             weekOneLink.click();
//         });
//
//     Check correct URL ending
//     browser.getCurrentUrl().then(function(url) {
//         assert.ok(url.endsWith("https://emelieaslund.me/reports/week/1"));
//     });
//
//     done();
// });
// });

test.describe("Use-case 2, Reports->Forms", function() {
    test.beforeEach(function(done) {
        this.timeout(30000);
        browser = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.firefox()).build();

        browser.get("https://emelieaslund.me/reports/");
        done();
    });

    test.afterEach(function(done) {
        browser.quit();
        done();
    });

    test.it("Test Report Page", function(done) {
        // display element background color
        browser.findElement(By.className("App")).then(function(displayElement) {
            displayElement.getCssValue("background-color").then(function(bgColor) {
                assert.equal(bgColor, "rgb(98, 134, 191)");
            });
        });

        // Check correct URL ending
        browser.getCurrentUrl().then(function(url) {
            assert.ok(url.endsWith("https://emelieaslund.me/reports/"));
        });

        done();
    });


    test.it("Test go from Reports to Register Form", function(done) {
        // Use nav link to go to form page
        browser.findElement(By.linkText("Formulär")).then(function(element) {
            element.click();
        });

        // Check correct heading
        browser.findElement(By.css("h2")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, "REGISTRERA EN NY ANVÄNDARE");
            });
        });

        // Check correct URL ending
        browser.getCurrentUrl().then(function(url) {
            assert.ok(url.endsWith("https://emelieaslund.me/forms/"));
        });

        done();
    });
});

test.describe("Use-case 3, Forms->Login", function() {
    test.beforeEach(function(done) {
        this.timeout(30000);
        browser = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.firefox()).build();

        browser.get("https://emelieaslund.me/forms/");
        done();
    });

    test.afterEach(function(done) {
        browser.quit();
        done();
    });

    test.it("Test Forms Page", function(done) {
        // display element background color
        browser.findElement(By.className("App")).then(function(displayElement) {
            displayElement.getCssValue("background-color").then(function(bgColor) {
                assert.equal(bgColor, "rgb(98, 134, 191)");
            });
        });

        // Check correct heading
        browser.findElement(By.css("h2")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, "REGISTRERA EN NY ANVÄNDARE");
            });
        });

        // Check correct URL ending
        browser.getCurrentUrl().then(function(url) {
            assert.ok(url.endsWith("https://emelieaslund.me/forms/"));
        });

        done();
    });

    test.it("Test go from Register Form to Login", function(done) {
        // Use nav link to go to form page
        browser.findElement(By.linkText("Logga In")).then(function(element) {
            element.click();
        });

        // Check correct heading
        browser.findElement(By.css("h2")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, "LOGGA IN");
            });
        });

        // Check correct URL ending
        browser.getCurrentUrl().then(function(url) {
            assert.ok(url.endsWith("https://emelieaslund.me/login/"));
        });

        done();
    });
});
