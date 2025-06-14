import { FormProductQtyAmt, FormProducts, FormProductUoM } from "@prime-fresh/common_api";

export type RFPASourceType = 'vendor' | 'farmer';

export interface IRFPAProducts extends FormProducts, FormProductUoM, FormProductQtyAmt {
    grade: string | null;
    purchaseDate: string | null;
    dispatchDate: string | null;
    deliveryDate: string | null;
    deliveryLocation: string | null;
    expectedHarvestDate?: string | null;
}
export interface IPaymentInfo {
    paymentMode: string | null;
    creditPeriod: number | null;
    paymentDate: string | null;
    paymentTerms: number | null;
    dueDate: string | null;
    advancePaidAmt: number | null;
    validityofQuote: string | null;
}

export interface IRFPA {
    id: string;
    rfpaId?: string;
    createdDate?: string;
    createdTime?: string;
    requestedBy?: string;
    requestingDepartment?: string;
    baseLocation?: string;
    companyName: string | null;
    purchaseLocation: string | null;
    otherPurchaseLoc: string | null;
    purchaseForSalesLocation: string | null;
    otherPurchaseForSalesLoc: string | null;
    specialReq: string | null;
    source: RFPASourceType;
    selectedParty: string | null;
    rfpaProducts: IRFPAProducts[];
    paymentInfo: IPaymentInfo;
    deliveryReceivingPerson: string | null;
    validityOfQuote: string | null;
    packingInstruction: string | null;
    remark: string | null;
    approvalStatus?: string | null;
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