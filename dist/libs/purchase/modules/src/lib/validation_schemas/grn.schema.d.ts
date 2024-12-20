import * as yup from 'yup';
export declare const grnSchema: yup.ObjectSchema<{
    grnType: string;
    companyName: string;
    billNo: string;
    serialNo: string;
    purchaseRequestByWhom: string;
    purchaseLocation: string;
    purchaseForWhich: string;
    source: string;
    selectedParty: string;
    products: {
        product: string;
        quantity: number;
        count: string;
        rate: number;
        rtv: string;
    }[];
    deliveryReceivingPerson: string;
    rmn: string;
}, yup.AnyObject, {
    grnType: undefined;
    companyName: undefined;
    billNo: undefined;
    serialNo: undefined;
    purchaseRequestByWhom: undefined;
    purchaseLocation: undefined;
    purchaseForWhich: undefined;
    source: undefined;
    selectedParty: undefined;
    products: "";
    deliveryReceivingPerson: undefined;
    rmn: undefined;
}, "">;
