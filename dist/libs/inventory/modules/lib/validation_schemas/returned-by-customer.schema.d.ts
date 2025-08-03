import * as yup from 'yup';
export declare const returnedByCustomerSchema: yup.ObjectSchema<{
    deliveryChallanNo: string;
    date: string;
    returnedProducts: {
        packingMaterialWeight?: number | null | undefined;
        productName: string;
        quantity: number;
        unitPrice: number;
        grossWeight: number;
    }[] | undefined;
}, yup.AnyObject, {
    deliveryChallanNo: undefined;
    date: undefined;
    returnedProducts: undefined;
}, "">;
