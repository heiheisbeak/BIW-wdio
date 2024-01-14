import { $ } from '@wdio/globals';
import Page from './page.js';

class SearchPage extends Page {

    get btnAddtoCart () {
        return $('button=Add to cart');
    }

    async selectItem (item) {
        return $('a='+item); 
    }
}
export default new SearchPage();