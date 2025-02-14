import { RequestedBy } from '../requestedBy.interface';

export interface PostLPvoucher {
    grnNo: string | null;
    companyName: string | null;
    debitCreditTo: string | null;
    payReceivedFrom: string | null;
    location: string | null;
    noOfLabours: number;
    loadingDate: string | null;
    contactNo: string | null;
    altContactNo: string | null;
    kyc: boolean;
    products: string | null;
    paymentMode: string | null;
    ratePerLabour: number;
    totalAmt: number;
    amtWords: string | null;
    receiverName: string | null;
    remark: string | null;
    anyAttachment: File | null;
}
export interface GetLPvoucher {
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
    companyName: {
        id: string;
        companyName: string;
    };
    debitCreditTo: string;
    payReceivedFrom: string;
    location: string;
    noOfLabours: number;
    ratePerLabour: number;
    loadingDate: string;
    contactNo: string;
    altContactNo: string;
    products: string;
    kyc: boolean;
    paymentMode: string;
    totalAmt: number;
    amtWords: string;
    receiverName: string;
    remark: string;
    anyAttachment: string;
    approvalStatus: string;
}
