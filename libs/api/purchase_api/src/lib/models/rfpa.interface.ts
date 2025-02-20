import { RequestedBy } from "./requestedBy.interface";


export interface RFPA_Items {
    product: string | null;
    grade: string | null;
    quantity: number | null;
    uom: string | null;
    unitPrice: number | null;
    totalVal: number | null;
    description: string | null;
    purchaseDate: string | null;
    dispatchDate: string | null;
    deliveryDate: string | null;
    deliveryLocation: string | null;
    expectedHarvestDate?: string | null;
}
export interface Payment_Info {
    paymentMode: string | null;
    creditPeriod: number | null;
    paymentDate: string | null;
    paymentTerms: number | null;
    dueDate: string | null;
    advancePaidAmt: number | null;
    validityofQuote: string | null;
}
export interface PostRFPA {
    companyName: string | null;
    purchaseLocation: string | null;
    otherPurchaseLoc: string | null;
    purchaseForSalesLocation: string | null;
    otherPurchaseForSalesLoc: string | null;
    specialReq: string | null;
    source: "vendor" | "farmer";
    selectedParty: string | null;
    rfpaProducts: RFPA_Items[];
    paymentInfo: Payment_Info;
    deliveryReceivingPerson: string | null;
    validityOfQuote: string | null;
    packingInstruction: string | null;
    remark: string | null;
}
export interface GetRFPA {
    id: string;
    rfpaId?: string;
    createdDate?: string;
    createdTime?: string;
    requestedBy?: RequestedBy;
    requestingDepartment?: string;
    baseLocation?: string;
    companyName: { id: string, companyName: string };
    purchaseLocation: string;
    otherPurchaseLoc: string
    purchaseForSalesLocation: string;
    otherPurchaseForSalesLoc: string
    specialReq: string;
    source: "vendor" | "farmer";
    selectedParty: string | null;
    rfpaProducts: RFPA_Items[];
    paymentInfo: Payment_Info;
    deliveryReceivingPerson: string;
    validityOfQuote: string;
    packingInstruction: string;
    remark: string;
    approvalStatus?: string;
}

export interface ChangeStatusResponse {
    user: {
        name: string;
        designation: string;
        department: string;
    }
}

export interface GetAllRFPAnumbers {
    id: string;
    rfpaId: string;
    approvalStatus: string;
}