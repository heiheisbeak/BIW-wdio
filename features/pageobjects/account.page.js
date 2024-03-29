import { $ } from '@wdio/globals'
import Page from './page.js';

class AccountPage extends Page {
    
    get heading() {
        return $("h1");
    }

    get firstName() {
        return $('#FirstName').getValue();
    }

    get lastName() {
        return $('#LastName').getValue();
    }

    get email() {
        return $('#Email').getValue();
    }

    open () {
        return super.open('account');
    }
}

export default new AccountPage();