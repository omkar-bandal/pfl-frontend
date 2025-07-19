import { ApprovalSummany, DocumentStatus } from "@prime-fresh/common_api";
export interface IDealSlip {
    id: string;
    createdBy?: string | null;
    createdDate?: string;
    createdTime?: string;
    documentId?: string | null;
    documentDef?: string | null;
    dealSlipNo?: string;
    rfpa: string,
    lotNo: string,
    loadingLocation: string,
    remark: string,
    specialRequest: string,
    overAllStatus?: DocumentStatus;
    approvalSummary?: Partial<ApprovalSummany>;
}

export interface GetAllDealSlipNums {
    id: string;
    dealSlipNo: string;
}

// dealSlipCreatedAt?: Date;
// requestedBy?: RequestedBy;
// requestingDepartment?: string;