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
    deliveryAddressProofCopy: {} | null | undefined;
    deliveryTime: string | null | undefined;
    receivingPersonFName: string;
    receivingPersonMName: string | null | undefined;
    receivingPersonLName: string;
    primaryContactNo: string;
    secondaryContactNo: string | null | undefined;
    emailPrimary: string;
    emailSecondary: string | null | undefined;
}, yup.AnyObject, {
    deliveryAddress: {
        address1: undefined;
        address2: undefined;
        location: undefined;
        city: undefined;
        state: undefined;
        pincode: undefined;
    };
    deliveryAddressProofCopy: undefined;
    deliveryTime: undefined;
    receivingPersonFName: undefined;
    receivingPersonMName: undefined;
    receivingPersonLName: undefined;
    primaryContactNo: undefined;
    secondaryContactNo: undefined;
    emailPrimary: undefined;
    emailSecondary: undefined;
}, "">;
