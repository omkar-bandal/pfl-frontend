import * as yup from 'yup';
export declare const rfpaSchema: yup.ObjectSchema<{
    companyName: string;
    selectedParty: string;
    rfpaProducts: {
        expectedHarvestDate?: Date | null | undefined;
        purchaseDate: Date;
        dispatchDate: Date;
        deliveryDate: Date;
        deliveryLocation: string;
        product: string;
        grade: string;
        quantity: number;
        unitPrice: number;
    }[];
    paymentInfo: {
        advancePaidAmt?: number | null | undefined;
        paymentMode: string;
        creditPeriod: number;
        paymentDate: Date;
        paymentTerms: number;
    };
    deliveryReceivingPerson: string;
}, yup.AnyObject, {
    companyName: undefined;
    selectedParty: undefined;
    rfpaProducts: "";
    paymentInfo: {
        paymentMode: undefined;
        advancePaidAmt: undefined;
        creditPeriod: undefined;
        paymentDate: undefined;
        paymentTerms: undefined;
    };
    deliveryReceivingPerson: undefined;
}, "">;
