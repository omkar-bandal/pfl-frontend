import * as yup from 'yup';
export declare const billingDetailsValidationSchema: yup.ObjectSchema<{
    billingName: string;
    commonlyKnownAs: yup.Maybe<string | undefined>;
    contactPersonFName: string;
    contactPersonMName: yup.Maybe<string | undefined>;
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
    secondaryContactNo: yup.Maybe<string | undefined>;
    emailPrimary: string;
    emailSecondary: yup.Maybe<string | undefined>;
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
}, "">;
