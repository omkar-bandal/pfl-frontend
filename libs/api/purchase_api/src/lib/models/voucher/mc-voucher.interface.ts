/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestedBy } from "../requestedBy.interface";

export interface IParticulars {
    id?: string,
    description: string | null,
    amt: number | null,
}

export interface IMultiCashVoucher {
    id: string,
    createdDate?: string,
    createdTime?: string,
    requestedBy?: RequestedBy,
    requestingDepartment?: string,
    voucherNo?: string,
    grnNo: string | null;
    challanNo: string | null;
    companyName: string | null;
    debitCreditTo: string | null;
    payReceivedFrom: string | null;
    location: string | null;
    totalAmt: number | null;
    amtWords: string | null;
    paymentMode: string | null;
    anyAttachment: any,
    receiverName: string | null;
    remark: string | null;
    particulars: IParticulars[],
    approvalStatus?: string | null;
}