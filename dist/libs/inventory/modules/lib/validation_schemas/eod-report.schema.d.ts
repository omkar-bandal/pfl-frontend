import * as yup from 'yup';
export declare const eodReportValidatoinSchema: yup.ObjectSchema<{
    companyName: string;
    location: string;
    stockDate: Date;
    eodProducts: {
        uom: string;
        sku: string;
        qty: number;
        totalWeightinKg: number;
    }[] | undefined;
    submission: string;
    comments: string | null | undefined;
}, yup.AnyObject, {
    companyName: undefined;
    location: undefined;
    stockDate: undefined;
    eodProducts: undefined;
    submission: undefined;
    comments: undefined;
}, "">;
