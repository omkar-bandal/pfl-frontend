import * as yup from 'yup';
export declare const transportPaymentVoucherSchema: yup.ObjectSchema<{
    companyName: string;
    debitCreditTo: string;
    payReceivedFrom: string;
    location: string;
    driverName: string;
    contactNo: string;
    altContactNo: string | null | undefined;
    vehicleNo: string;
    dispatchLocation: string;
    destinationLocation: string;
    paymentMode: string;
    receiverName: string;
}, yup.AnyObject, {
    companyName: undefined;
    debitCreditTo: undefined;
    payReceivedFrom: undefined;
    location: undefined;
    driverName: undefined;
    contactNo: undefined;
    altContactNo: undefined;
    vehicleNo: undefined;
    dispatchLocation: undefined;
    destinationLocation: undefined;
    paymentMode: undefined;
    receiverName: undefined;
}, "">;
