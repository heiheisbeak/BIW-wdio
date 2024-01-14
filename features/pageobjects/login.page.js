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
        return $('button=Log in');
    }

    async login (username, password) {
        if (await this.linkLogOut.isDisplayed()) {
            await this.linkLogOut.click();
        }
        await this.linkLogIn.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    open () {
        return super.open('/');
    }
}

export default new LoginPage();
