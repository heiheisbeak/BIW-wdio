import { $ } from '@wdio/globals'
import Page from './page.js';

class Registration extends Page {
    
    get heading() {
        return $("h1");
    }

    get firstNameField() {
        return $('name=Firstname');
    }

    get lastNameField() {
        return $('name=Lastname');
    }

    get emailField() {
        return $('name=Email');
    }

    get passwordField() {
        return $('name=Password');
    }

    get confirmPasswordField() {
        return $('name=ConfirmPassword');
    }

    get submitRegistrationButton() {
        return $('name=register-button');
    }

    open () {
        return super.open('registration');
    }
}

export default new RegistrationPage();