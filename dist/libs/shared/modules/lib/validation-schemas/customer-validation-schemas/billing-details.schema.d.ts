import * as yup from 'yup';
export declare const billingDetailsValidationSchema: yup.ObjectSchema<{
    billingName: string;
    commonlyKnownAs: string | null | undefined;
    contactPersonFName: string;
    contactPersonMName: string | null | undefined;
    contactPersonLName: string;
    billingAddress: {
        address2?: string | null | undefined;
        address1: string;
        location: string;
        city: string;
        state: string;
        pincode: string;
    };
    primaryContactNo: string;
    secondaryContactNo: string | null | undefined;
    emailPrimary: string;
    emailSecondary: string | null | undefined;
    billingAddressProofCopy: {} | null | undefined;
    billingFormatCopy: {} | null | undefined;
}, yup.AnyObject, {
    billingName: undefined;
    commonlyKnownAs: undefined;
    contactPersonFName: undefined;
    contactPersonMName: undefined;
    contactPersonLName: undefined;
    billingAddress: {
        address1: undefined;
        address2: undefined;
        location: undefined;
        city: undefined;
        state: undefined;
        pincode: undefined;
    };
    primaryContactNo: undefined;
    secondaryContactNo: undefined;
    emailPrimary: undefined;
    emailSecondary: undefined;
    billingAddressProofCopy: undefined;
    billingFormatCopy: undefined;
}, "">;
