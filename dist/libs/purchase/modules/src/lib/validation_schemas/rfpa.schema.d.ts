import * as yup from 'yup';
export declare const rfpaSchema: yup.ObjectSchema<{
    companyName: string;
    purchaseLocation: string;
    purchaseForWhich: string;
    selectedParty: string;
    paymentInfo: {
        paymentMode: string;
        creditPeriod: number;
        paymentDate: Date;
        paymentTerms: number;
    };
    deliveryReceivingPerson: string;
}, yup.AnyObject, {
    companyName: undefined;
    purchaseLocation: undefined;
    purchaseForWhich: undefined;
    selectedParty: undefined;
    paymentInfo: {
        paymentMode: undefined;
        creditPeriod: undefined;
        paymentDate: undefined;
        paymentTerms: undefined;
    };
    deliveryReceivingPerson: undefined;
}, "">;
