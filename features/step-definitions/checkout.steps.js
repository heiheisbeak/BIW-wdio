import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals';
import HomePage from '../pageobjects/home.page.js';
import SearchPage from '../pageobjects/search.page.js';
import ShoppingCartPage from '../pageobjects/shoppingcart.page.js';
import CheckOutPage from '../pageobjects/checkout.page.js';
import checkoutPage from '../pageobjects/checkout.page.js';


When(/^I add an "([^"]*)" to my cart$/, async (item) => {
	await HomePage.search(item);
    await SearchPage.btnAddtoCart.click();
});

When(/^I complete the checkout process$/, async () => {
    await HomePage.linkShoppingCart.click();
    await ShoppingCartPage.checkTerms.click();
    await ShoppingCartPage.btnCheckOut.click();
    await CheckOutPage.dropCountry.selectByVisibleText('United Kingdom');
    await CheckOutPage.txtfieldCity.setValue('City');
    await CheckOutPage.txtfieldAddress1.setValue('AdddressLine1');
    await CheckOutPage.txtfieldPostCode.setValue('NN1 1NN');
    await CheckOutPage.txtfieldPhone.setValue('01908555666');
    await CheckOutPage.btnAddressContinue.click();
    await browser.pause(200);
    await CheckOutPage.btnShippingContinue.click();
    await browser.pause(200);
    await CheckOutPage.btnPaymentContinue.click();
    await browser.pause(200);
    await CheckOutPage.btnPaymentInfoContinue.click();
    await browser.pause(200);
    await CheckOutPage.btnConfirm.click();
    await browser.pause(10000);
	return true;
});

Then(/^I can review my completed order$/, () => {
    //navigate to my acount
    //check order history
	return true;
});



