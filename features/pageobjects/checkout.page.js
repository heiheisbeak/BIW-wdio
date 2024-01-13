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
        //button-1 confirm-order-next-step-button
    }
  

}
export default new CheckOutPage();