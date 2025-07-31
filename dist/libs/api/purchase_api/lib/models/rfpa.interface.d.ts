import { ApprovalSummany, DocumentStatus } from '../../../../common_api/src/index.ts';

export type RFPASourceType = 'vendor' | 'farmer';
export interface IRFPAProducts {
    productName: string | null;
    origin: string | null;
    variety: string | null;
    count: string | null;
    size: string | null;
    uom: string | null;
    quantity: number | null;
    unitPrice: number | null;
    amount: number | null;
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
