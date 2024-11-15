export declare const initValMCVItems: {
    itemName: string;
    itemQty: number;
    itemUom: string;
    rate: number;
    amt: number;
};
export declare const initValMMultipleCashVoucher: {
    grnNo: string;
    companyName: string;
    debitCreditTo: string;
    payReceivedFrom: string;
    location: string;
    mvItems: {
        itemName: string;
        itemQty: number;
        itemUom: string;
        rate: number;
        amt: number;
    }[];
    totalAmt: number;
    amtWords: string;
    paymentMode: string;
    receivedBy: string;
    anyAttachment: null;
};
