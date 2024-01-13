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

    async register (firstname, lastname, email, password) {
        await (this.firstNameField).setValue(firstname);
        await (this.lastNameField).setValue(lastname);
        await (this.emailField).setValue(email);
        await (this.passwordField).setValue(password);
        await (this.confirmPasswordField).setValue(password);
        await (this.submitRegistrationButton).click();
    }

    open () {
        return super.open('/register');
    }
}

export default new RegistrationPage();