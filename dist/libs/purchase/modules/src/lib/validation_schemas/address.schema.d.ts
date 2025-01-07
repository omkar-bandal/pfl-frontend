import * as yup from 'yup';
export declare const addressSchema: yup.ObjectSchema<{
    address1: string;
    address2: string | undefined;
    location: string;
    city: string;
    state: string;
    pincode: string;
}, yup.AnyObject, {
    address1: undefined;
    address2: undefined;
    location: undefined;
    city: undefined;
    state: undefined;
    pincode: undefined;
}, "">;
