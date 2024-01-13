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
	//await (LoginPage.linkLogIn).click();
    await (LoginPage.login(CustomerModel.Email, 'password123'));
});

Given(/^I am logged in as a registered user$/, async () => {
    await RegistrationPage.open();
	await RegistrationPage.register(CustomerModel.FirstName, CustomerModel.LastName, CustomerModel.Email, 'password123')
    await LoginPage.login(CustomerModel.Email, 'password123');
});
