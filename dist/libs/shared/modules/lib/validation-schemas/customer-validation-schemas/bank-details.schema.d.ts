import * as yup from 'yup';
export declare const bankDetailsValidationSchema: yup.ObjectSchema<{
    bankAccHolderFName: string;
    bankAccHolderMName: yup.Maybe<string | undefined>;
    bankAccHolderLName: string;
    bankName: string;
    bankBranch: string;
    accType: string;
    bankAccNo: string;
    ifscCode: string;
    bankAddress: {
        address2?: string | null | undefined;
        address1: string;
        location: string;
        city: string;
        state: string;
        pincode: string;
    };
}, yup.AnyObject, {
    bankAccHolderFName: undefined;
    bankAccHolderMName: undefined;
    bankAccHolderLName: undefined;
    bankName: undefined;
    bankBranch: undefined;
    accType: undefined;
    bankAccNo: undefined;
    ifscCode: undefined;
    bankAddress: {
        address1: undefined;
        address2: undefined;
        location: undefined;
        city: undefined;
        state: undefined;
        pincode: undefined;
    };
}, "">;
