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
    cFirstName: string | null | undefined;
    cMiddleName: string | null | undefined;
    cLastName: string | null | undefined;
    contactNumber: string | null | undefined;
    officeEmail: string | null | undefined;
    notes: string | null | undefined;
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
    cFirstName: undefined;
    cMiddleName: undefined;
    cLastName: undefined;
    contactNumber: undefined;
    officeEmail: undefined;
    notes: undefined;
}, "">;
