import * as Yup from 'yup';
export declare const officeValidationSchema: Yup.ObjectSchema<{
    name: string;
    address: {
        address2?: string | null | undefined;
        address1: string;
        location: string;
        city: string;
        state: string;
        pincode: string;
    };
    contactNumber: string;
    officeEmail: string;
    notes: string | undefined;
}, Yup.AnyObject, {
    name: undefined;
    address: {
        address1: undefined;
        address2: undefined;
        location: undefined;
        city: undefined;
        state: undefined;
        pincode: undefined;
    };
    contactNumber: undefined;
    officeEmail: undefined;
    notes: undefined;
}, "">;
