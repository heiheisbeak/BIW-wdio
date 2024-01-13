import { browser } from '@wdio/globals'

export default class Page {
    //Getters for top menu
    get linkRegister () {
        return $("a", "Register");
    }

    get linkLogIn () {
        return $('a=Log in');
    }

    get linkLogOut () {
        return $('a=Log out');
    }

    get linkWishList() {
        return $("span", "Wishlist");
    }
    get linkShoppingCart() {
        return $('span=Shopping cart');
    }
    
    get linkMyAccount() {
        return $('a=My account');
    }

    get searchBox() {
        return $('#small-searchterms');
    }

    get btnSearchSubmit() {
        return $('button=Search');
    }

    async search(item) {
        await (this.searchBox).setValue(item);
        await (this.btnSearchSubmit).click();
    }

    open (path) {
        return browser.url(`https://demo.nopcommerce.com${path}`);
        //return browser.url(`${path}`);
    }
}
