import { PostBankDetails, PostBillingDetails, PostDeliveryDetails, PostKeyMobileNumbers, PostOfficeUseOnly, PostPaymentTerms, PostProductSpecification, PostStatutoryDetails } from '../../../../../api/admin_api/src/index.ts';

export declare const initValCustomer: {
    organisationName: null;
    customerTypes: null;
    customerCategory: null;
    organisationType: null;
    otherType: null;
    customerAddress: import('../../../../../api/common_api/src/index.ts').Address;
    primaryContactNo: null;
    secondaryContactNo: null;
    emailPrimary: null;
    emailSecondary: null;
    keyMobileNumbers: PostKeyMobileNumbers;
    billingDetails: PostBillingDetails;
    deliveryDetails: PostDeliveryDetails;
    statutoryDetails: PostStatutoryDetails;
    bankDetails: PostBankDetails;
    productSpecification: PostProductSpecification[];
    paymentTerms: PostPaymentTerms;
    officeUseOnly: PostOfficeUseOnly;
};
