import { Given, When, Then, After } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import RegistrationPage from '../pageobjects/registration.page.js';
import AccountPage from '../pageobjects/account.page.js';
import CustomerModel from '../models/customer.model.js';

const customer = new CustomerModel();

When(/^I register a new account$/, async () => {
    await (RegistrationPage.linkRegister).click();
    await RegistrationPage.register(customer.FirstName, customer.LastName, customer.Email, 'password123')
});

Then(/^I am able to use it to log in$/, async () => {
    await (LoginPage.login(customer.Email, 'password123'));
});

Then(/^View my account$/, async () => {
    await (RegistrationPage.linkMyAccount.click());
    expect (await AccountPage.firstName).toEqual(customer.FirstName);
    //expect (await AccountPage.firstName).toEqual('foobar'); -- use to demo failure
    expect (await AccountPage.lastName).toEqual(customer.LastName);
    expect (await AccountPage.email).toEqual(customer.Email);
});

After(async function (scenario) {
    if (scenario.result.status === 'failed') {
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot, 'image/png');
    }
});




