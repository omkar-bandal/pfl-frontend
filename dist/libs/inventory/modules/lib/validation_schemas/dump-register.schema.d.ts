import * as yup from 'yup';
export declare const dumpRegisterSchema: yup.ObjectSchema<{
    companyName: string;
    location: string;
    date: Date;
    batchNo: string | null | undefined;
    grn: string | null | undefined;
    labourDetails: {
        product: string;
        uom: string;
        quantity: number;
        dumpCost: number;
    }[] | undefined;
}, yup.AnyObject, {
    companyName: undefined;
    location: undefined;
    date: undefined;
    batchNo: undefined;
    grn: undefined;
    labourDetails: undefined;
}, "">;
