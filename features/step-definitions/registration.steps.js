import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import RegistrationPage from '../pageobjects/registration.page.js';
import AccountPage from '../pageobjects/account.page.js';
import CustomerModel from '../models/customer.model.js';

When(/^I select the Register option$/, async () => {
    await (RegistrationPage.linkRegister).click();
});

When(/^I enter my registration details$/, async () => {
    await (await (RegistrationPage.firstNameField)).setValue(CustomerModel.FirstName);
    await (RegistrationPage.lastNameField).setValue(CustomerModel.LastName);
    await (RegistrationPage.emailField).setValue(CustomerModel.Email);
    await (RegistrationPage.passwordField).setValue("password123");
    await (RegistrationPage.confirmPasswordField).setValue("password123");
    await (RegistrationPage.submitRegistrationButton).click();
});

Then(/^View my account$/, async () => {
    await (RegistrationPage.linkMyAccount.click());
    expect (await AccountPage.firstName).toHaveText(CustomerModel.FirstName);
    expect (await AccountPage.lastName).toHaveText(CustomerModel.LastName);
    expect (await AccountPage.email).toHaveText(CustomerModel.Email);
});
