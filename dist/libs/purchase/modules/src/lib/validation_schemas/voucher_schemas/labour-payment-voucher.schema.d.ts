import * as yup from 'yup';
export declare const labourPaymentVoucherSchema: yup.ObjectSchema<{
    companyName: string;
    debitCreditTo: string;
    payReceivedFrom: string;
    location: string;
    noOfLabours: number;
    ratePerLabour: number;
    loadingDate: Date;
    contactNo: string;
    paymentMode: string;
    receiverName: string;
}, yup.AnyObject, {
    companyName: undefined;
    debitCreditTo: undefined;
    payReceivedFrom: undefined;
    location: undefined;
    noOfLabours: undefined;
    ratePerLabour: undefined;
    loadingDate: undefined;
    contactNo: undefined;
    paymentMode: undefined;
    receiverName: undefined;
}, "">;
