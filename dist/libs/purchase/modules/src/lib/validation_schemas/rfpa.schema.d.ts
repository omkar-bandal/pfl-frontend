import * as yup from 'yup';
export declare const rfpaSchema: yup.ObjectSchema<{
    companyName: string;
    purchaseLocation: string | undefined;
    otherPurchaseLoc: string | undefined;
    purchaseForSalesLocation: string | undefined;
    otherPurchaseForSalesLoc: string | undefined;
    selectedParty: string;
    rfpaProducts: {
        grade?: string | null | undefined;
        expectedHarvestDate?: Date | null | undefined;
        productName: string;
        quantity: number;
        unitPrice: number;
        purchaseDate: string;
        dispatchDate: string;
        deliveryDate: string;
        deliveryLocation: string;
    }[];
    paymentInfo: {
        advancePaidAmt?: number | null | undefined;
        paymentMode: string;
        creditPeriod: number;
        paymentDate: string;
        paymentTerms: number;
    };
    deliveryReceivingPerson: string;
}, yup.AnyObject, {
    companyName: undefined;
    purchaseLocation: undefined;
    otherPurchaseLoc: undefined;
    purchaseForSalesLocation: undefined;
    otherPurchaseForSalesLoc: undefined;
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
