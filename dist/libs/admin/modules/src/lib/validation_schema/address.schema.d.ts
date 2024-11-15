import * as Yup from 'yup';
export declare const addressSchema: Yup.ObjectSchema<{
    address1: string;
    address2: string | undefined;
    location: string;
    city: string;
    state: string;
    pincode: string;
}, Yup.AnyObject, {
    address1: undefined;
    address2: undefined;
    location: undefined;
    city: undefined;
    state: undefined;
    pincode: undefined;
}, "">;
