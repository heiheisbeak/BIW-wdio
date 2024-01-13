import { $ } from '@wdio/globals';
import Page from './page.js';

class ShoppingCartPage extends Page {

    get checkTerms() {
        return $('#termsofservice');
    }

    get btnCheckOut() {
        return $('#checkout');
    }

}
export default new ShoppingCartPage();