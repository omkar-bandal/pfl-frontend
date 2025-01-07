import * as Yup from 'yup';
export declare const customerValidationSchema: Yup.ObjectSchema<{
    organisationName: string;
    organisationType: string;
    otherType: string | undefined;
    primaryContactNo: string;
    secondaryContactNo: string | undefined;
    emailPrimary: string;
    emailSecondary: string | undefined;
}, Yup.AnyObject, {
    organisationName: undefined;
    organisationType: undefined;
    otherType: undefined;
    primaryContactNo: undefined;
    secondaryContactNo: undefined;
    emailPrimary: undefined;
    emailSecondary: undefined;
}, "">;
