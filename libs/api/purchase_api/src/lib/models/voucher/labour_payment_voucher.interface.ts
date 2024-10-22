import { RequestedBy } from "../rfpa.interface";

export interface PostLPvoucher{
    grnNo: string,
    companyName: string;
    debitCreditTo: string,
    payReceivedFrom: string,
    location: string,
    noOfLabours: number,
    loadingDate: Date,
    workLocation: string,
    contactNo: string,
    altContactNo: string,
    products: string,
    paymentMode: string,
    ratePerLabour: number,
    totalAmt: number,
    amtWords: string,
    receiverName: string,
    anyAttachment: File | null,
}
export interface GetLPvoucher{
    id:string;
    createdDateAt?: string;
    requestedBy?: RequestedBy;
    requestingDepartment?: string;
    baseLocation?: string;
    grnNo: string,
    companyName: string;
    debitCreditTo: string,
    payReceivedFrom: string,
    location: string,
    noOfLabours: number,
    loadingDate: Date,
    workLocation: string,
    contactNo: string,
    altContactNo: string,
    products: string,
    paymentMode: string,
    ratePerLabour: number,
    totalAmt: number,
    amtWords: string,
    receivedBy: string,
    anyAttachment: File | null,
}