/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApprovalSummany, DocumentStatus } from '../../../shared';

export interface ITranportPaymentVoucher {
  id: string;
  documentId?: string | null;
  documentDef?: string | null;
  createdBy?: string | null;
  createdDate?: string;
  createdTime?: string;
  receivedBy?: string;
  voucherNo?: string;
  grnNo: string | null;
  companyName: string | null;
  debitCreditTo: string | null;
  payReceivedFrom: string | null;
  location: string | null;
  driverName: string | null;
  contactNo: string | null;
  altContactNo: string | null;
  vehicleNo: string | null;
  dispatchLocation: string | null;
  destinationLocation: string | null;
  products: string[];
  paymentMode: string | null;
  freightAmt: number | null;
  decidedAmt: number | null;
  actualAmt: number | null;
  advanceAmt: number | null;
  totalPayableAmt: number | null;
  finalPayableAmt: number | null;
  deductionAmt: number | null;
  extraAmt: number | null;
  amtWords: string | null;
  receiverName: string | null;
  kyc: boolean;
  remark: string | null;
  anyAttachment: File[] | null;
  overAllStatus?: DocumentStatus;
  approvalSummary?: ApprovalSummany;
}
// requestedBy?: RequestedBy;
// requestingDepartment?: string;
