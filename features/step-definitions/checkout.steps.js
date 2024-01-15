import { Given, When, Then, After } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals';
import CustomerModel from '../models/customer.model.js';
import HomePage from '../pageobjects/home.page.js';
import SearchPage from '../pageobjects/search.page.js';
import ShoppingCartPage from '../pageobjects/shoppingcart.page.js';
import CheckOutPage from '../pageobjects/checkout.page.js';
import OrderInformationPage from '../pageobjects/orderinformation.page.js';

When(/^I add an "([^"]*)" to my cart$/, async function(item) {
    this.ItemName = item;
	await HomePage.search(this.ItemName);
    await SearchPage.btnAddtoCart.click();
});

When(/^I complete the checkout process$/, async function() {
    const customer = new CustomerModel();
    await HomePage.linkShoppingCart.click();
    expect (await ShoppingCartPage.productDesc).toEqual(this.ItemName);
    this.BasketTotal = await ShoppingCartPage.basketTotal;
    await ShoppingCartPage.checkTerms.click();
    await ShoppingCartPage.btnCheckOut.click();
    await CheckOutPage.checkOut('United Kingdom', customer.City, customer.AddressLine1, customer.PostCode, customer.Phone);
});

Then(/^I can review my completed order$/, async function () {
    await (CheckOutPage.lnkOrderDetails).waitForClickable();
    await (CheckOutPage.lnkOrderDetails).click();
    expect (await OrderInformationPage.lnkOrderProduct).toEqual(this.ItemName);
    expect (await OrderInformationPage.orderConfirmTotal).toEqual(this.BasketTotal);
});

After(async function (scenario) {
    if (scenario.result.status === 'failed') {
        await browser.takeScreenshot();
    }
    await (OrderInformationPage.linkLogOut).click();
    await (browser.deleteAllCookies());
});



