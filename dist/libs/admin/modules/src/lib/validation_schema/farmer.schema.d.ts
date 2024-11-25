import * as Yup from 'yup';
export declare const farmerValidationSchema: Yup.ObjectSchema<{
    farmerfName: string;
    farmermName: Yup.Maybe<string | undefined>;
    farmerlName: string;
    residensialAddress: {
        address2?: string | null | undefined;
        address1: string;
        location: string;
        city: string;
        state: string;
        pincode: string;
    };
    primaryMobileNo: string;
}, Yup.AnyObject, {
    farmerfName: undefined;
    farmermName: undefined;
    farmerlName: undefined;
    residensialAddress: {
        address1: undefined;
        address2: undefined;
        location: undefined;
        city: undefined;
        state: undefined;
        pincode: undefined;
    };
    primaryMobileNo: undefined;
}, "">;
