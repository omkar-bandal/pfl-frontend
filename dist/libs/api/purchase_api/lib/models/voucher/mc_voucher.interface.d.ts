import { RequestedBy } from '../requestedBy.interface';

export interface Particulars {
    id?: string;
    description: string;
    amt: number;
}
export interface PostMCvoucher {
    grnNo: string;
    challanNo: string;
    companyName: string;
    debitCreditTo: string;
    payReceivedFrom: string;
    location: string;
    particulars: Particulars[];
    totalAmt: number;
    amtWords: string;
    paymentMode: string;
    receiverName: string;
    remark: string;
    anyAttachment: File | null;
}
export interface GetMCvoucher {
    id: string;
    createdDate: string;
    createdTime: string;
    requestedBy: RequestedBy;
    requestingDepartment: string;
    voucherNo: string;
    grnNo: {
        id: string;
        grnNo: string;
    };
    challanNo: {
        id: string;
        challanNo: string;
    };
    companyName: {
        id: string;
        companyName: string;
    };
    debitCreditTo: string;
    payReceivedFrom: string;
    location: string;
    totalAmt: number;
    amtWords: string;
    paymentMode: string;
    anyAttachment: string;
    approvalStatus: string;
    receiverName: string;
    remark: string;
    particulars: {
        id: string;
        description: string;
        amt: number;
    }[];
}
