import { ApprovalSummany, DocumentStatus } from "../../../shared";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ILaborPaymentVoucher {
    id: string;
    documentId?: string | null;
    documentDef?: string | null;
    createdBy?: string | null;
    createdDate?: string | null;
    createdTime?: string | null;
    requestedBy?: string;
    requestingDepartment?: string;
    voucherNo?: string;
    approvalStatus?: string;
    grnNo: string | null;
    companyName: string | null;
    debitCreditTo: string | null;
    payReceivedFrom: string | null;
    location: string | null;
    noOfLabours: number | null;
    loadingDate: string | null;
    contactNo: string | null;
    altContactNo: string | null;
    kyc: boolean;
    products: string | null;
    paymentMode: string | null;
    ratePerLabour: number | null;
    totalAmt: number;
    amtWords: string | null;
    receiverName: string | null;
    remark: string | null;
    anyAttachment: File | null;
    overAllStatus?: DocumentStatus;
    approvalSummary?: ApprovalSummany;
}