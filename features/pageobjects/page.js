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
        return $('a=My account')
    }


    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://demo.nopcommerce.com${path}`)
    }
}
