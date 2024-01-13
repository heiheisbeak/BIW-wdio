import { browser } from '@wdio/globals'

export default class Page {
    //Getters for top menu
    get linkRegister () {
        return $("a", "Register");
    }
    get linkLogIn () {
        return $('a=Log in');
    }
    get linkWishList() {
        return $("span", "Wishlist");
    }
    get linkShoppingCart() {
        return $("span", "Shopping cart");
    }
    get linkMyAccount() {
        return $("a=My account");
    }
    open (path) {
        return browser.url(`https://demo.nopcommerce.com${path}`);
        //return browser.url(`${path}`);
    }
}
