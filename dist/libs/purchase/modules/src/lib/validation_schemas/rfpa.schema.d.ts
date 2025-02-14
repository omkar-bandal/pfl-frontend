import * as yup from 'yup';
export declare const rfpaSchema: yup.ObjectSchema<{
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
        paymentMode: string;
        creditPeriod: number;
        paymentDate: Date;
        paymentTerms: number;
    };
    deliveryReceivingPerson: string;
}, yup.AnyObject, {
    selectedParty: undefined;
    rfpaProducts: "";
    paymentInfo: {
        paymentMode: undefined;
        creditPeriod: undefined;
        paymentDate: undefined;
        paymentTerms: undefined;
    };
    deliveryReceivingPerson: undefined;
}, "">;
