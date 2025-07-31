import { ApprovalSummany, DocumentStatus } from '../../../../../common_api/src/index.ts';

export interface IParticulars {
    id?: string;
    description: string | null;
    amt: number | null;
}
export interface IMultiCashVoucher {
    id: string;
    documentId?: string | null;
    documentDef?: string | null;
    createdBy?: string | null;
    createdDate?: string;
    createdTime?: string;
    voucherNo?: string;
    grnNo: string | null;
    challanNo: string | null;
    companyName: string | null;
    debitCreditTo: string | null;
    payReceivedFrom: string | null;
    location: string | null;
    totalAmt: number | null;
    amtWords: string | null;
    paymentMode: string | null;
    anyAttachment: any;
    receiverName: string | null;
    remark: string | null;
    particulars: IParticulars[];
    overAllStatus?: DocumentStatus;
    approvalSummary?: ApprovalSummany;
}
