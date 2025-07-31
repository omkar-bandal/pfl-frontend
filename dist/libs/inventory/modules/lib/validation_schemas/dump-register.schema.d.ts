import * as yup from 'yup';
export declare const dumpRegisterSchema: yup.ObjectSchema<{
    companyName: string;
    location: string;
    date: string;
    batchNo: string | null | undefined;
    grn: string | null | undefined;
    dumpProducts: {
        uom: string;
        productName: string;
        quantity: number;
        unitPrice: number;
    }[] | undefined;
    remark: string | null | undefined;
}, yup.AnyObject, {
    companyName: undefined;
    location: undefined;
    date: undefined;
    batchNo: undefined;
    grn: undefined;
    dumpProducts: undefined;
    remark: undefined;
}, "">;
