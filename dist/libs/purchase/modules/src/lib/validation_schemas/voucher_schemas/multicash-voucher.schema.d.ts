import * as yup from 'yup';
export declare const multicashVoucherSchema: yup.ObjectSchema<{
    companyName: string;
    debitCreditTo: string;
    payReceivedFrom: string;
    location: string;
    paymentMode: string;
    receiverName: string;
    particulars: {
        description: string;
        amt: number;
    }[] | undefined;
}, yup.AnyObject, {
    companyName: undefined;
    debitCreditTo: undefined;
    payReceivedFrom: undefined;
    location: undefined;
    paymentMode: undefined;
    receiverName: undefined;
    particulars: "";
}, "">;
