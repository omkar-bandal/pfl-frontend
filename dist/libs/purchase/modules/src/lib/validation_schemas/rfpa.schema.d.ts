import * as yup from 'yup';
export declare const rfpaSchema: yup.ObjectSchema<{
    companyName: string;
    purchaseLocation: string;
    purchaseForWhich: string;
    selectedParty: string;
    rfpaProducts: {
        expectedHarvestDate?: Date | null | undefined;
        product: string;
        grade: string;
        quantity: number;
        unitPrice: number;
        purchaseDate: Date;
        dispatchDate: Date;
        deliveryDate: Date;
        deliveryLocation: string;
    }[];
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
    rfpaProducts: "";
    paymentInfo: {
        paymentMode: undefined;
        creditPeriod: undefined;
        paymentDate: undefined;
        paymentTerms: undefined;
    };
    deliveryReceivingPerson: undefined;
}, "">;
