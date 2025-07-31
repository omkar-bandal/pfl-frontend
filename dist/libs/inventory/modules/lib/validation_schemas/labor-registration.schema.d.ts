import * as yup from 'yup';
export declare const laborRegistrationSchema: yup.ObjectSchema<{
    representativeName: string;
    siteName: string;
    laborType: string;
    presentAddress: {
        address2?: string | null | undefined;
        location: string;
        address1: string;
        city: string;
        state: string;
        pincode: string;
    };
    permanentAddress: {
        address2?: string | null | undefined;
        location: string;
        address1: string;
        city: string;
        state: string;
        pincode: string;
    };
}, yup.AnyObject, {
    representativeName: undefined;
    siteName: undefined;
    laborType: undefined;
    presentAddress: {
        address1: undefined;
        address2: undefined;
        location: undefined;
        city: undefined;
        state: undefined;
        pincode: undefined;
    };
    permanentAddress: {
        address1: undefined;
        address2: undefined;
        location: undefined;
        city: undefined;
        state: undefined;
        pincode: undefined;
    };
}, "">;
