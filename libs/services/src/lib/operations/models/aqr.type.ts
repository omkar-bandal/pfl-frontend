import { ApprovalSummany, DocumentStatus } from "../../shared";

export type AQRParameters = {
    qualityParameterId: string,
    qualityParameterName: string,
    qualityParameterType: "good" | "bad" | "average" | null,
    quantity: number | null,
    percentage: number | null,
}

export type IAQR = {
    id: string,
    documentId?: string | null;
    documentDef?: string | null;
    createdBy?: string | null;
    createdDate?: string | null,
    createdTime?: string | null,
    dcNo: string | null,
    dcDate: string | null,
    arrivedQty: number | null,
    samplingQty: number | null,
    purchaseBy: string | null,
    packBy: string | null,
    receivedBy: string | null,
    qcCheckBy: string | null,
    verifiedBy: string | null,
    totalQty: number | null,
    totalpercent: number | null,
    supplierName: string | null,
    arrivalDate: string | null,
    supplierLocation: string | null,
    remark: string | null,
    product: string | null,
    parameters: AQRParameters[],
    overAllStatus?: DocumentStatus;
    approvalSummary?: ApprovalSummany;
}