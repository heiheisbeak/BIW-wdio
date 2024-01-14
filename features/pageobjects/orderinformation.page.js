import { $ } from '@wdio/globals';
import Page from './page.js';

class OrderInfomationPage extends Page {

    get lnkOrderProduct () {
        return $('em a').getText();
    }

    get orderConfirmTotal () {
        return $('.cart-total-right strong').getText();
    }
} 
export default new OrderInfomationPage();