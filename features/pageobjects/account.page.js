import { $ } from '@wdio/globals'
import Page from './page.js';

class AccountPage extends Page {
    
    get heading() {
        return $("h1");
    }

    get firstName() {
        return $('#FirstName');
    }

    get lastName() {
        return $('#LastName');
    }

    get email() {
        return $('#Email');
    }
    
    open () {
        return super.open('account');
    }
}

export default new AccountPage();