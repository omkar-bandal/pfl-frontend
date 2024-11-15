import { RequestedBy } from '../requestedBy.interface';

export interface PostLPvoucher {
    grnNo: string;
    companyName: string;
    debitCreditTo: string;
    payReceivedFrom: string;
    location: string;
    noOfLabours: number;
    loadingDate: Date;
    workLocation: string;
    contactNo: string;
    altContactNo: string;
    products: string;
    paymentMode: string;
    ratePerLabour: number;
    totalAmt: number;
    amtWords: string;
    receiverName: string;
    anyAttachment: File | null;
}
export interface GetLPvoucher {
    id: string;
    createdDate: string;
    createdTime: string;
    requestedBy: RequestedBy;
    requestingDepartment: string;
    voucherNo: string;
    grnNo: string;
    companyName: string;
    debitCreditTo: string;
    payReceivedFrom: string;
    location: string;
    noOfLabours: number;
    ratePerLabour: number;
    loadingDate: string;
    workLocation: string;
    contactNo: string;
    altContactNo: string;
    products: string;
    paymentMode: string;
    totalAmt: number;
    amtWords: string;
    receiverName: string;
    anyAttachment: string;
    approvalStatus: string;
}
