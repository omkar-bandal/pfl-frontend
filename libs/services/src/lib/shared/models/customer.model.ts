import type { Address } from "./address.model";

import type {
    ICustomerBankDetails,
    ICustomerBillingDetails,
    ICustomerDeliveryDetails,
    ICustomerKeyMobileNumbers,
    ICustomerOfficeUseOnly,
    ICustomerPaymentTerms,
    ICustomerProductSpecs,
    ICustomerStatutoryDetails,
} from './customer-models';

export interface ICustomer {
    id: string;
    createdBy?: string | null;
    createdDate?: string | null;
    createdTime?: string | null;
    customerCode?: string | null;
    organisationName: string | null;
    customerTypes: string | null;
    customerCategory: string | null;
    organisationType: string | null;
    otherType: string | null;
    customerAddress: Address;
    primaryContactNo: string | null;
    secondaryContactNo: string | null;
    emailPrimary: string | null;
    emailSecondary: string | null;
    keyMobileNumbers: ICustomerKeyMobileNumbers;
    billingDetails: ICustomerBillingDetails;
    deliveryDetails: ICustomerDeliveryDetails;
    statutoryDetails: ICustomerStatutoryDetails;
    bankDetails: ICustomerBankDetails;
    productSpecification: ICustomerProductSpecs[];
    paymentTerms: ICustomerPaymentTerms;
    officeUseOnly: ICustomerOfficeUseOnly;
}

export interface ICustomerPartialData {
    id:string;
    organisationName:string;
    billingAddress: Address;
    deliveryAddress:Address;
    gstNumber: string;
    panNumber: string
}

export interface ICustomerNames {
    id: string;
    organisationName: string;
}