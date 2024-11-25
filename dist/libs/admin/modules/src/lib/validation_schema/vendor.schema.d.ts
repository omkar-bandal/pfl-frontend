import * as Yup from 'yup';
declare const vendorValidationSchema: Yup.ObjectSchema<{
    companyName: string;
    category: string;
    subcategory: string;
    inFandVBusinessSince: string | undefined;
    dateOfIncorporation: string | undefined;
    officeAddress: {
        address2?: string | null | undefined;
        address1: string;
        location: string;
        city: string;
        state: string;
        pincode: string;
    };
    officeContactNo: string | undefined;
}, Yup.AnyObject, {
    companyName: undefined;
    category: undefined;
    subcategory: undefined;
    inFandVBusinessSince: undefined;
    dateOfIncorporation: undefined;
    officeAddress: {
        address1: undefined;
        address2: undefined;
        location: undefined;
        city: undefined;
        state: undefined;
        pincode: undefined;
    };
    officeContactNo: undefined;
}, "">;
export default vendorValidationSchema;
