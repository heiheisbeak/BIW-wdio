import { $ } from '@wdio/globals';
import Page from './page.js';

class CheckOutPage extends Page {

    get btnAddressContinue () {
        return $('.button-1.new-address-next-step-button');
    }

    get btnShippingContinue () {
        return $('.button-1.shipping-method-next-step-button');
    }

    get btnPaymentContinue () {
        return $('.button-1.payment-method-next-step-button');
    }

    get btnPaymentInfoContinue () {
        return $('.button-1.payment-info-next-step-button');
    }

    get dropCountry () {
        return $('#BillingNewAddress_CountryId');
    }

    get dropState () {
        return $('#BillingNewAddress.StateProvinceId');
    }
    
    get txtfieldCity () {
        return $('#BillingNewAddress_City');
    }
    
    get txtfieldAddress1 () {
        return $('#BillingNewAddress_Address1');
    }
    
    get txtfieldPostCode () {
        return $('#BillingNewAddress_ZipPostalCode');
    }

    get txtfieldPhone () {
        return $('#BillingNewAddress_PhoneNumber');
    }

    get btnConfirm () {
        return $('button=Confirm');
    }

    get lnkOrderDetails () {
        return $('a=Click here for order details.');
    }

    get orderTotal() {
        return $('.value-summary strong').getText();
    }

    async checkOut (country, city, addressline1, postcode, phone) {
        await (this.dropCountry.selectByVisibleText(country));
        await (this.txtfieldCity.setValue(city));
        await (this.txtfieldAddress1.setValue(addressline1));
        await (this.txtfieldPostCode.setValue(postcode));
        await (this.txtfieldPhone.setValue(phone));

        await (this.btnAddressContinue).waitForClickable();
        await (this.btnAddressContinue).click();

        await (this.btnShippingContinue).waitForClickable();
        await (this.btnShippingContinue).click();

        await (this.btnPaymentContinue).waitForClickable();
        await (this.btnPaymentContinue).click();

        await (this.btnPaymentInfoContinue).waitForClickable();
        await (this.btnPaymentInfoContinue).click();

        await (this.btnConfirm).waitForClickable();
        await (this.btnConfirm).click();
    }
  

}
export default new CheckOutPage();