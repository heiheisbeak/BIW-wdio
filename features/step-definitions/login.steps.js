import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import AccountPage from '../pageobjects/account.page.js';

const pages = {
    login: LoginPage,
    account: AccountPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});

When(/^I login with (.+) and (.+)$/, async (email, password) => {
    await LoginPage.linkLogIn.click();
    await LoginPage.login(email, password);
});

Then(/^I should be able to view My (.+)$/, async (account) => {
	//click the link
    await LoginPage.linkMyAccount.click();
    //validate we are in the account page
    await expect(AccountPage.email).toHaveText(account);
});



