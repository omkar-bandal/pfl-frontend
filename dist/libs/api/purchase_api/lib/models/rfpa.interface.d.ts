import { RequestedBy } from './requestedBy.interface';

export interface RFPA_Items {
    product: string | null;
    grade: string | null;
    quantity: number;
    uom: string | null;
    unitPrice: number;
    totalVal: number;
    description: string | null;
    purchaseDate: string | null;
    dispatchDate: string | null;
    deliveryDate: string | null;
    deliveryLocation: string | null;
    expectedHarvestDate?: string | null;
}
export interface Payment_Info {
    paymentMode: string | null;
    creditPeriod: number;
    paymentDate: string | null;
    paymentTerms: number;
    dueDate: string | null;
    advancePaidAmt: number;
    validityofQuote: string | null;
}
export interface PostRFPA {
    companyName: string | null;
    purchaseLocation: string | null;
    purchaseForWhich: string | null;
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
    companyName: string;
    purchaseLocation: string;
    purchaseForWhich: string;
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
    };
}
export interface GetAllRFPAnumbers {
    id: string;
    rfpaId: string;
    approvalStatus: string;
}
