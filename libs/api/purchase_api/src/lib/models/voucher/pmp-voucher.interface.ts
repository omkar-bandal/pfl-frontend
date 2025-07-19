/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApprovalSummany, DocumentStatus, Address } from '@prime-fresh/common_api';
export interface IMaterials {
    id?: string;
    itemName: string | null;
    itemQty: number | null;
    itemUom: string | null;
    rate: number | null;
    amt: number;
}
export interface IPackingMaterialPaymentVoucher {
    id: string;
    documentId?: string | null;
    documentDef?: string | null;
    createdBy?: string | null;
    createdDate?: string;
    createdTime?: string;
    voucherNo?: string;
    grnNo: string | null;
    companyName: string | null;
    debitCreditTo: string | null;
    payReceivedFrom: string | null;
    location: string | null;
    sellerName: string | null;
    contactNo: string | null;
    altContactNo: string | null;
    address: Address;
    purpose: string | null;
    paymentMode: string | null;
    totalAmt: number | null;
    amtWords: string | null;
    materials: IMaterials[];
    receiverName: string | null;
    kyc: boolean;
    remark: string | null;
    anyAttachment: any;
    overAllStatus?: DocumentStatus;
    approvalSummary?: ApprovalSummany;
}
// requestedBy?: string;
// requestingDepartment?: string;
// approvalStatus?: string | null;