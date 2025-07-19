import { ApprovalSummany, DocumentStatus } from "@prime-fresh/common_api";

export type IEODProducts = {
    id?: string | null;
    sku: string | null,
    uom: string | null,
    qty: number | null,
    totalWeightinKg: number | null,
}

export type IEODReport = {
    id: string;
    documentId?: string | null;
    documentDef?: string | null;
    createdBy?: string | null;
    createdDate?: string,
    createdTime?: string,
    companyName: string | null,
    location: string | null,
    stockDate: string | null,
    eodProducts: IEODProducts[],
    submission: string | null,
    comments: string | null,
    overAllStatus?: DocumentStatus;
    approvalSummary?: ApprovalSummany;
}