export declare const initValPackingMaterials: {
    itemName: string;
    itemQty: number;
    itemUom: string;
    rate: number;
    amt: number;
};
export declare const initValPackingMaterialVoucher: {
    grnNo: string;
    companyName: string;
    debitCreditTo: string;
    payReceivedFrom: string;
    location: string;
    sellerName: string;
    address: {
        address1: string;
        address2: string;
        location: string;
        city: string;
        state: string;
        pincode: string;
    };
    contactNo: string;
    altContactNo: string;
    purpose: string;
    materials: {
        itemName: string;
        itemQty: number;
        itemUom: string;
        rate: number;
        amt: number;
    }[];
    paymentMode: string;
    ratePerLabour: number;
    totalAmt: number;
    amtWords: string;
    receivedBy: string;
    anyAttachment: null;
};
