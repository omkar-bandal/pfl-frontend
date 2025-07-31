import * as yup from 'yup';
export declare const aqrValidationSchema: yup.ObjectSchema<{
    dcNo: string | null | undefined;
    dcDate: string | null | undefined;
    arrivedQty: number;
    samplingQty: number;
    purchaseBy: string;
    receivedBy: string;
    qcCheckBy: string;
    verifiedBy: string;
    totalQty: number | null | undefined;
    totalpercent: number | null | undefined;
    supplierName: string;
    arrivalDate: string;
    supplierLocation: string;
    remark: string | null | undefined;
    product: string;
    parameters: {
        quantity: number;
    }[] | undefined;
}, yup.AnyObject, {
    dcNo: undefined;
    dcDate: undefined;
    arrivedQty: undefined;
    samplingQty: undefined;
    purchaseBy: undefined;
    receivedBy: undefined;
    qcCheckBy: undefined;
    verifiedBy: undefined;
    totalQty: undefined;
    totalpercent: undefined;
    supplierName: undefined;
    arrivalDate: undefined;
    supplierLocation: undefined;
    remark: undefined;
    product: undefined;
    parameters: undefined;
}, "">;
