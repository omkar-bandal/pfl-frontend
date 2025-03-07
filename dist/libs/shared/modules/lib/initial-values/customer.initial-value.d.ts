import { PostBankDetails, PostBillingDetails, PostDeliveryDetails, PostKeyMobileNumbers, PostOfficeUseOnly, PostPaymentTerms, PostProductSpecification, PostStatutoryDetails } from '../../../../../api/admin_api/src/index.ts';

export declare const initValCustomer: {
    organisationName: string;
    customerTypes: {
        id: string;
        name: string;
    };
    customerCategory: {
        id: string;
        name: string;
    };
    organisationType: string;
    otherType: string;
    customerAddress: import('../../../../../api/common_api/src/index.ts').Address;
    primaryContactNo: string;
    secondaryContactNo: string;
    emailPrimary: string;
    emailSecondary: string;
    keyMobileNumbers: PostKeyMobileNumbers;
    billingDetails: PostBillingDetails;
    deliveryDetails: PostDeliveryDetails;
    statutoryDetails: PostStatutoryDetails;
    bankDetails: PostBankDetails;
    productSpecification: PostProductSpecification[];
    paymentTerms: PostPaymentTerms;
    officeUseOnly: PostOfficeUseOnly;
};
