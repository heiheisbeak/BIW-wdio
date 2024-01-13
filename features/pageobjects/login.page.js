import { $ } from '@wdio/globals';
import Page from './page.js';

class LoginPage extends Page {

    get inputUsername () {
        return $('#Email');
    }

    get inputPassword () {
        return $('#Password');
    }

    get btnLogin () {
        //return $('button[type="submit"]');
        //return $$('button[type="submit"]')[1];
        return $('button=Log in');
        //return $('.login-button');

        
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/');
    }
}

export default new LoginPage();
