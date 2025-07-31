import * as yup from 'yup';
export declare const bankDetailsValidationSchema: yup.ObjectSchema<{
    ifCancelledCheque: NonNullable<boolean | undefined>;
    cancelledChequeCopy: {} | undefined;
    notCancelledChequeReason: string | undefined;
    bankAccHolderFName: string;
    bankAccHolderMName: string | null | undefined;
    bankAccHolderLName: string;
    bankName: string;
    bankBranch: string;
    accType: string;
    otherAccType: string | null | undefined;
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
    bankStatementCopy: any;
}, yup.AnyObject, {
    ifCancelledCheque: undefined;
    cancelledChequeCopy: undefined;
    notCancelledChequeReason: undefined;
    bankAccHolderFName: undefined;
    bankAccHolderMName: undefined;
    bankAccHolderLName: undefined;
    bankName: undefined;
    bankBranch: undefined;
    accType: undefined;
    otherAccType: undefined;
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
    bankStatementCopy: undefined;
}, "">;
