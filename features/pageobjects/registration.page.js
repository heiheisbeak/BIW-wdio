import { $ } from '@wdio/globals';
import Page from './page.js';

class RegistrationPage extends Page {
    
    get heading() {
        return $("h1");
    }

    get firstNameField() {
        return $('#FirstName');
    }

    get lastNameField() {
        return $('#LastName');
    }

    get emailField() {
        return $('#Email');
    }

    get passwordField() {
        return $('#Password');
    }

    get confirmPasswordField() {
        return $('#ConfirmPassword');
    }

    get submitRegistrationButton() {
        return $('#register-button');
    }

    open () {
        return super.open('/');
    }
}

export default new RegistrationPage();