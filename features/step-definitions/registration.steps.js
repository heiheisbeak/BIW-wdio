import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals';

import LoginPage from '../pageobjects/login.page.js';
import RegistrationPage from '../pageobjects/registration.page.js';
import AccountPage from '../pageobjects/account.page.js';

const pages = {
    login: LoginPage,
    //registration: RegistrationPage,
    //account: AccountPage
}


Given(/^I am viewing the home page$/, async (page) => {
    await pages[page].open();
});

When(/^I select the Register option$/, async () => {
	//await pages[page].open();
    //(await RegistrationPage.linkLogIn).click();
});

When(/^I enter my registration details$/, async () => {
    (await RegistrationPage.firstNameField).setValue("alan");
    (await RegistrationPage.lastNameField).setValue("test");
    (await RegistrationPage.emailField).setValue("alan@test.com");
    (await RegistrationPage.passwordField).setValue("123123");
    (await RegistrationPage.confirmPasswordField).setValue("123123");
    (await RegistrationPage.submitRegistrationButton).click();
});

Then(/^I am able to log in$/, async () => {
	(await LoginPage.btnLogin).click();
    (await LoginPage.login('alan@test.com', '123123'));
});

Then(/^View my account$/, async () => {
    await expect (AccountPage.firstName).toHaveText("alan");
});
