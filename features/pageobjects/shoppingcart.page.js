import { $ } from '@wdio/globals';
import Page from './page.js';

class ShoppingCartPage extends Page {

    get checkTerms() {
        return $('#termsofservice');
    }

    get btnCheckOut() {
        return $('#checkout');
    }

    get productDesc() {
        return $('.product-name').getText();
    }

    get basketTotal() {
        return $('.value-summary strong').getText();
    }

}
export default new ShoppingCartPage();