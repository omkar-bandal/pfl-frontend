/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestedBy } from '../requestedBy.interface';

export interface ITranportPaymentVoucher {
  id: string;
  createdDate?: string;
  createdTime?: string;
  requestedBy?: RequestedBy;
  receivedBy?: string;
  requestingDepartment?: string;
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
  products: string | null;
  paymentMode: string | null;
  freightAmt: number;
  kyc: boolean;
  totalAmt: number;
  amtWords: string | null;
  receiverName: string | null;
  remark: string | null;
  anyAttachment: File[] | null;
}
