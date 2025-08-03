import * as yup from 'yup';
export declare const deliveryDetailsValidationSchema: yup.ObjectSchema<{
    deliveryAddress: {
        address2?: string | null | undefined;
        address1: string;
        location: string;
        city: string;
        state: string;
        pincode: string;
    };
    receivingPersonFName: string;
    receivingPersonMName: yup.Maybe<string | undefined>;
    receivingPersonLName: string;
    primaryContactNo: string;
    secondaryContactNo: yup.Maybe<string | undefined>;
    emailPrimary: string;
    emailSecondary: yup.Maybe<string | undefined>;
}, yup.AnyObject, {
    deliveryAddress: {
        address1: undefined;
        address2: undefined;
        location: undefined;
        city: undefined;
        state: undefined;
        pincode: undefined;
    };
    receivingPersonFName: undefined;
    receivingPersonMName: undefined;
    receivingPersonLName: undefined;
    primaryContactNo: undefined;
    secondaryContactNo: undefined;
    emailPrimary: undefined;
    emailSecondary: undefined;
}, "">;
