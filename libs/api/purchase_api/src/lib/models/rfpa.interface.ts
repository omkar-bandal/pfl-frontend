import { ApprovalSummany, DocumentStatus, FormProductQtyAmt, FormProducts, FormProductUoM } from "@prime-fresh/common_api";

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
    validityOfQuote: string | null;
}

export interface IRFPA {
    id: string;
    rfpaId?: string;
    createdBy?: string | null;
    createdDate?: string;
    createdTime?: string;
    documentId?: string | null;
    documentDef?: string | null;
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
    packingInstruction: string | null;
    remark: string | null;
    overAllStatus?: DocumentStatus;
    approvalSummary?: Partial<ApprovalSummany>;
    // requestedBy?: string;
    // requestingDepartment?: string;
    // baseLocation?: string;
    // approvalStatus?: string | nul
    // l;
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