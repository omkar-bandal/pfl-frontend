import * as yup from 'yup';
export declare const packingMaterialPaymentVoucherSchema: yup.ObjectSchema<{
    companyName: string;
    debitCreditTo: string;
    payReceivedFrom: string;
    location: string;
    sellerName: string;
    address: {
        address2?: string | null | undefined;
        location: string;
        address1: string;
        city: string;
        state: string;
        pincode: string;
    };
    contactNo: string;
    altContactNo: string | null | undefined;
    paymentMode: string;
    receiverName: string;
    materials: {
        itemName: string;
        itemQty: number;
        itemUom: string;
        rate: number;
    }[] | undefined;
}, yup.AnyObject, {
    companyName: undefined;
    debitCreditTo: undefined;
    payReceivedFrom: undefined;
    location: undefined;
    sellerName: undefined;
    address: {
        address1: undefined;
        address2: undefined;
        location: undefined;
        city: undefined;
        state: undefined;
        pincode: undefined;
    };
    contactNo: undefined;
    altContactNo: undefined;
    paymentMode: undefined;
    receiverName: undefined;
    materials: "";
}, "">;
