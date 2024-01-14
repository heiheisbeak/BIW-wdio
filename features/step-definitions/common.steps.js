import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/home.page.js';
import LoginPage from '../pageobjects/login.page.js';
import RegistrationPage from '../pageobjects/registration.page.js';
import AccountPage from '../pageobjects/account.page.js';

import CustomerModel from '../models/customer.model.js';

const pages = {
    home: HomePage,
    login: LoginPage,
    registration: RegistrationPage,
    account: AccountPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});

Then(/^I am able to log in$/, async () => {
    const customer = new CustomerModel();
    await (LoginPage.login(customer.Email, 'password123'));
});

Given(/^I am logged in as a registered user$/, async () => {
    const customer = new CustomerModel();
    await RegistrationPage.open();
	await RegistrationPage.register(customer.FirstName, customer.LastName, customer.Email, 'password123')
    await LoginPage.login(customer.Email, 'password123');
});
