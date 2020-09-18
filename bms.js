const { browser, element } = require("protractor");

describe("Login function", function () {

    it("if login with valid credentials", function () {
        browser.get('http://localhost:4200/login');
        browser.sleep(1000);
        browser.findElement(by.id("username")).sendKeys('DE11111');
        browser.findElement(by.id("pwd")).sendKeys('1234');
        browser.findElement(by.css("button.btn.btn-primary")).click();
        
        
    });

    it("Register Validation", function () {
        browser.get('http://localhost:4200/register');
        browser.sleep(1000);
        browser.findElement(by.name("firstName")).sendKeys('Shreyash');
        browser.findElement(by.name("lastName")).sendKeys('Shah');
        browser.findElement(by.name("panNo")).sendKeys('DS12343');
        browser.findElement(by.name("password")).sendKeys('1234567890');
        browser.findElement(by.name("confirmPassword")).sendKeys('1234567890');
        browser.findElement(by.name("emailId")).sendKeys('shreyash@gmail.com');
        browser.findElement(by.name("contactNo")).sendKeys('987654321');
        browser.findElement(by.name("dob")).sendKeys('03/03/1999');
        browser.findElement(by.css("button.btn.btn-success.savebutton")).click();
    });



    it("Add Account Details Validation", function () {
        browser.get('http://localhost:4200/login');
        browser.findElement(by.id("username")).sendKeys('DE11111');
        browser.findElement(by.id("pwd")).sendKeys('1234');
        browser.findElement(by.css("button.btn.btn-primary")).click();

        browser.get('http://localhost:4200/account');
        browser.sleep(1000);
        browser.findElement(by.name("accountNo")).sendKeys('DU12345699');
        browser.findElement(by.name("bankName")).sendKeys('AxisBank');
        browser.findElement(by.name("micrCode")).sendKeys('CCSS');
        browser.findElement(by.name("ifsc")).sendKeys('CseC');
        browser.executeScript("return window.localStorage.getItem('panNo')");
        browser.findElement(by.css("button.btn.btn-success.savebutton")).click();
    });

    it("Getting Transaction Details", function () {
        browser.get('http://localhost:4200/login');
        browser.sleep(2000);
        browser.findElement(by.id("username")).sendKeys('DE11111');
        browser.findElement(by.id("pwd")).sendKeys('1234');
        browser.findElement(by.css("button.btn.btn-primary")).click();
        
        browser.get('http://localhost:4200/transactions');
        browser.executeScript("return window.localStorage.getItem('panNo');");
        browser.sleep(9000);
        browser.findElement(by.name("fundId")).sendKeys('90');
        browser.findElement(by.css("button.btn.btn-outline-primary.invest-btn.btn-lg.float-left")).click();
        browser.findElement(by.css('table.table')).getText();





    });


    it("Getting Fund Details", function () {
        browser.get('http://localhost:4200/login');
        browser.findElement(by.id("username")).sendKeys('DE11111');
        browser.findElement(by.id("pwd")).sendKeys('1234');
        browser.findElement(by.css("button.btn.btn-primary")).click();
        

        browser.get('http://localhost:4200/dashboard');
        browser.executeScript("return window.localStorage.getItem('panNo');");
        browser.sleep(9000);
        browser.findElement(by.css('table.table')).getText();
        browser.executeScript("return window.localStorage.removeItem('fundId');");

    });


    it("Getting Account Details", function () {
        browser.get('http://localhost:4200/login');
        browser.findElement(by.id("username")).sendKeys('DE11111');
        browser.findElement(by.id("pwd")).sendKeys('1234');
        browser.findElement(by.css("button.btn.btn-primary")).click();
        

        browser.get('http://localhost:4200/accountdetails');
        browser.executeScript("return window.localStorage.getItem('panNo');");
        browser.sleep(9000);
        browser.findElement(by.css('table.table.table-striped')).getText();

    });

    it("Add Mutual Fund Details", function () {
        browser.get('http://localhost:4200/login');
        browser.findElement(by.id("username")).sendKeys('DE11111');
        browser.findElement(by.id("pwd")).sendKeys('1234');
        browser.findElement(by.css("button.btn.btn-primary")).click();
        

        browser.get('http://localhost:4200/addfund');
        browser.sleep(4000);
        browser.findElement(by.name("fundId")).sendKeys('98');
        browser.findElement(by.name("fundName")).sendKeys('Axis Bank Fund');
        browser.findElement(by.name("amount")).sendKeys('10000');
        browser.findElement(by.name("panNo")).sendKeys('DE11111');
        browser.findElement(by.name("accountNo")).sendKeys('DU12345679');
        browser.findElement(by.css('button.btn.btn-success.savebutton')).click();
        

    });



});

