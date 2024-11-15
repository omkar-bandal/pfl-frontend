import { RFPA_Items, Payment_Info } from "@prime-fresh/purchase_api";
export declare const initValRFPAItems: RFPA_Items;
export declare const initValRFPA: {
    companyName: string;
    purchaseLocation: string;
    purchaseForWhich: string;
    specialReq: string;
    source: string;
    selectedParty: string;
    rfpaProducts: RFPA_Items[];
    paymentInfo: Payment_Info;
    deliveryReceivingPerson: string;
    validityOfQuote: string;
    packingInstruction: string;
};
